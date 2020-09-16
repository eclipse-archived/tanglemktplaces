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

import { Server } from 'http';
import SocketIO from 'socket.io';
import { ServiceFactory } from './factories/serviceFactory';
import { zmqSubscribe } from './routes/zmqSubscribe';
import { zmqUnsubscribe } from './routes/zmqUnsubscribe';
import { ZmqService } from './services/zmqService';
import { AppHelper } from './utils/appHelper';

AppHelper.build(
    (app, config, port) => {
        ServiceFactory.register('zmq', () => new ZmqService(config));

        const server = new Server(app);
        const socketServer = SocketIO(server);

        server.listen(port);

        socketServer.on('connection', (socket) => {
            socket.on('subscribe', (data) => socket.emit('subscribe', zmqSubscribe(config, socket, data)));
            socket.on('unsubscribe', (data) => socket.emit('unsubscribe', zmqUnsubscribe(config, socket, data)));
        });
    },
    true);
