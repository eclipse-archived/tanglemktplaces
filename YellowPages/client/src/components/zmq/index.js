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

import { Component } from 'react';
import { ServiceFactory } from '../../factories/serviceFactory';

class ZmqView extends Component {
    constructor(props) {
        super(props);

        this._subscriptions = [];
        this._apiClient = ServiceFactory.get('api');

        this.state = {
            isRunning: false,
        };

        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
    }

    componentDidMount() {
        this.start()
        window.addEventListener('beforeunload', this.stop);
    }

    componentWillUnmount() {
        this.stop();
        window.removeEventListener('beforeunload', this.stop); // remove the event handler for normal unmounting
    }

    render() {
        return null;
    }

    /**
     * Start the subscription running.
     */
    async start() {
        this.setState({ isRunning: true }, async () => {
            const response = await this._apiClient.zmqSubscribe({ events: ['tx'] }, (_, data) => {
                this.props.callback({ ...data });
            });

            this._subscriptions = [];
            if (response.subscriptionIds) {
                this._subscriptions.push({ event: 'tx', subscriptionId: response.subscriptionIds[0] });
            }
        });
    }

    /**
     * Stop the subscription running.
     */
    async stop() {
        this.setState({ isRunning: false }, async () => {
            if (this._subscriptions) {
                await this._apiClient.zmqUnsubscribe(
                    {
                        subscriptionIds: this._subscriptions.map(s => s.subscriptionId)
                    });

                this._subscriptions = [];
            }
        });
    }
}

export default ZmqView;
