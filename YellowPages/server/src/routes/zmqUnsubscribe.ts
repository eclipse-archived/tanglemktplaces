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
 * Unsubscribe from zmq events.
 * @param config The configuration.
 * @param socket The websocket.
 * @param request The request.
 * @returns The response.
 */
export function zmqUnsubscribe(config, socket, request) {
    let response;

    try {
        if (request.subscriptionIds && request.subscriptionIds.length > 0) {
            const zmqService = ServiceFactory.get('zmq');

            for (let i = 0; i < request.subscriptionIds.length; i++) {
                zmqService.unsubscribe(request.subscriptionIds[i]);
            }
            console.log('zmqUnsubscribe', request.subscriptionIds);
        }

        response = {
            success: true,
            message: ''
        };
    } catch (err) {
        response = {
            success: false,
            message: err.toString()
        };
    }

    return response;
}
