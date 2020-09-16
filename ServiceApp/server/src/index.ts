/********************************************************************************
 * Copyright (c) 2020 Contributors to the Eclipse Foundation
 * 
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 * 
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 * 
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/


import { FailMode, LinearWalkStrategy, LoadBalancerSettings, SuccessMode } from '@iota/client-load-balancer';
import axios from 'axios';
import { Server } from 'http';
import SocketIO from 'socket.io';
import { depth, minWeightMagnitude, onlineNodeConfig, onlineNodeConfigURL, providers } from './config.json';
import { ServiceFactory } from './factories/serviceFactory';
import { zmqSubscribe } from './routes/zmqSubscribe';
import { zmqUnsubscribe } from './routes/zmqUnsubscribe';
import { ZmqService } from './services/zmqService';
import { AppHelper } from './utils/appHelper';

AppHelper.build(
    async (app, config, port) => {
        ServiceFactory.register('zmq', () => new ZmqService(config.zmq));

        let settings = { depth, minWeightMagnitude, providers };

        if (onlineNodeConfig) {
            const response = await axios.get(onlineNodeConfigURL);
            const data = response && response.data;
            if (data) {
                settings = data;
            }
        }

        const loadBalancerSettings: LoadBalancerSettings = {
            nodeWalkStrategy: new LinearWalkStrategy(
                (settings && settings.providers || providers).map(provider => ({ provider }))
            ),
            depth: settings && settings.depth || depth,
            mwm: settings && settings.minWeightMagnitude || minWeightMagnitude,
            successMode: SuccessMode.keep,
            failMode: FailMode.all,
            timeoutMs: 10000,
            failNodeCallback: (node, err) => {
                console.log(`Failed node ${node.provider}, ${err.message}`);
            }
        };
        ServiceFactory.register('load-balancer-settings', () => loadBalancerSettings);
    
        const server = new Server(app);
        const socketServer = SocketIO(server);

        server.listen(port);

        socketServer.on('connection', (socket) => {
            socket.on('subscribe', (data) => socket.emit('subscribe', zmqSubscribe(config, socket, data)));
            socket.on('unsubscribe', (data) => socket.emit('unsubscribe', zmqUnsubscribe(config, socket, data)));
        });
    },
    true);
