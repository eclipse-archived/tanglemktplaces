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

import { trytesToAscii } from '@iota/converter';
import { composeAPI } from '@iota/client-load-balancer';
import { mamFetchAll } from '@iota/mam.js';
import { ServiceFactory } from '../factories/serviceFactory';

export const fetch = (root, key, reportEvent, onFetchComplete) => {
  if (!root) return;
  const promise = new Promise(async (resolve, reject) => {
    try {
      const loadBalancerSettings = ServiceFactory.get('load-balancer-settings');
      const iota = composeAPI(loadBalancerSettings);

      const fetched = await mamFetchAll(iota, root, 'restricted', key, 20);
          
      if (fetched && fetched.length > 0) {
        fetched.forEach(({ message }) => reportEvent(JSON.parse(decodeURI(trytesToAscii(message)))));
      }

      return resolve(onFetchComplete());
    } catch (error) {
      console.log('MAM fetch error', error);
      return reject();
    }
  });

  return promise;
};