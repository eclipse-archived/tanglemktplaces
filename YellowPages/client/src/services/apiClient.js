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

import SocketIOClient from 'socket.io-client';

/**
 * Class to handle api communications.
 */
export class ApiClient {
    constructor(endpoint) {
        this._endpoint = endpoint; // The endpoint for performing communications.
        this._socket = SocketIOClient(this._endpoint, {
            autoConnect: true,
            reconnection: true,
            reconnectionAttempts: Infinity,
            reconnectionDelay: 500,
            jsonp: false,
            secure: true,
            transports: ['websocket']
        }); // The web socket to communicate on.
    }
    
    /**
     * Perform a request to subscribe to zmq events.
     * @param request The request to send.
     * @param callback Callback called with zmq data.
     * @returns The response from the request.
     */
    async zmqSubscribe(request, callback) {
        return new Promise(resolve => {
            try {
                this._socket.emit('subscribe', request);
                this._socket.on('subscribe', subscribeResponse => {
                    resolve(subscribeResponse);
                });
                this._socket.on('zmq', zmqResponse => {
                    callback(zmqResponse.event, zmqResponse.data);
                });
            } catch (err) {
                resolve({
                    success: false,
                    message: `There was a problem communicating with the API.\n${err}`
                });
            }
        });
    }

    /**
     * Perform a request to unsubscribe to zmq events.
     * @param request The request to send.
     * @returns The response from the request.
     */
    async zmqUnsubscribe(request) {
        return new Promise(resolve => {
            try {
                this._socket.emit('unsubscribe', request);
                this._socket.on('unsubscribe', subscribeResponse => {
                    resolve(subscribeResponse);
                });
            } catch (err) {
                resolve({
                    success: false,
                    message: `There was a problem communicating with the API.\n${err}`
                });
            }
        });
    }
}
