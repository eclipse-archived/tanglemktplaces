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

import { domain } from '../config.json';

const parseSettings = ({ method, data } = {}) => ({
  headers: { 'Content-Type': 'application/json' },
  method,
  body: data ? JSON.stringify(data) : undefined,
});

const request = async (endpoint, { params, ...settings } = {}) => {
  if (!endpoint) return null;
  const response = await fetch(endpoint, parseSettings(settings));
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

export default {
  get: async (endpoint, params) => {
    return await request(`${domain}/${endpoint}`, { method: 'get', params });
  },
  post: async (endpoint, data = {}) => {
    return await request(`${domain}/${endpoint}`, { method: 'post', data });
  }
};
