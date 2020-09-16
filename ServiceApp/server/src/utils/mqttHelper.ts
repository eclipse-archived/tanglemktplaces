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


import mqtt from 'mqtt';
import io from 'socket.io-client';
import { mqttConfig } from '../config.json';

const client = mqtt.connect(mqttConfig.broker);
const socket = io(mqttConfig.domain);

export const createHelperClient = () => {
    return new Promise((resolve, reject) => {
        try {
            socket.emit('subscribe', { events: ['tx'] });
            socket.on('subscribe', data => {
                resolve(data.subscriptionIds[0]);
            });
        } catch (error) {
            reject(error);
        }
    });
};

export const zmqToMQTT = topic =>
    socket.on('zmq', data => client.publish(topic, JSON.stringify(data)));

export const unsubscribeHelperClient = subscriptionId =>
    socket.emit('unsubscribe', { subscriptionIds: [subscriptionId] });
