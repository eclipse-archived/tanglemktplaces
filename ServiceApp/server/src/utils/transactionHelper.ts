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


import { composeAPI, LoadBalancerSettings } from '@iota/client-load-balancer';
import { asciiToTrytes } from '@iota/converter';
import { defaultAddress, depth, minWeightMagnitude } from '../config.json';
import { ServiceFactory } from '../factories/serviceFactory';
import { generateSeed } from './iotaHelper';

export const sendMessage = (payload, tag) => {
    const seed = generateSeed();
    const message = asciiToTrytes(encodeURI(JSON.stringify(payload)));

    const transfers = [{
        value: 0,
        address: defaultAddress,
        message,
        tag
    }];

    const loadBalancerSettings = ServiceFactory.get<LoadBalancerSettings>('load-balancer-settings');
    const iota = composeAPI(loadBalancerSettings);

    return new Promise((resolve, reject) => {
        iota.prepareTransfers(seed, transfers)
            .then(trytes => {
                iota.sendTrytes(trytes, depth, minWeightMagnitude)
                    .then(bundle => {
                        // console.log(`Published transaction with tail hash: ${bundle[0].hash}`);
                        // console.log(`Bundle: ${JSON.stringify(bundle, null, 1)}`);
                        resolve(bundle[0].hash);
                    })
                    .catch(error => {
                        console.log('sendTrytes Error', error);
                        reject(error);
                    });
            })
            .catch(error => {
                console.log('prepareTransfers Error', error);
                reject(error);
            });
    });
};
