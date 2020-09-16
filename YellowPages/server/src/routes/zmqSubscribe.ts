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

import { ServiceFactory } from '../factories/serviceFactory';

/**
 * Subscribe to zmq events.
 * @param config The configuration.
 * @param socket The websocket.
 * @param request The request.
 * @returns The response.
 */
export function zmqSubscribe(config, socket, request) {
    let response;

    try {
        const subscriptionIds = [];

        if (request.events && request.events.length > 0) {
            const zmqService = ServiceFactory.get('zmq');

            for (let i = 0; i < request.events.length; i++) {
                const subscriptionId = zmqService.subscribeEvent(request.events[i], (event, data) => {
                    console.log('emit', event, data);
                    socket.emit('zmq', { event, data });
                });
                subscriptionIds.push(subscriptionId);
                console.log('zmqSubscribe', subscriptionId, subscriptionIds);
            }
        }

        response = {
            success: true,
            message: '',
            subscriptionIds
        };
    } catch (err) {
        response = {
            success: false,
            message: err.toString()
        };
    }

    return response;
}
