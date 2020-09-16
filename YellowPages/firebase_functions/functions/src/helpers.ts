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

const axios = require('axios');
const iotaAreaCodes = require('@iota/area-codes');
const { getGoogleMapsApiKey } = require('./firebase');

const addressToGPS = async address => {
    try {
      const apiKey = await getGoogleMapsApiKey();
      const options = {
        method: 'GET',
        headers: { 'content-type': 'application/json; charset=UTF-8' },
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
      };
      const result = await axios(options);
      const { lat, lng } = result.data.results[0].geometry.location;
      return `${lat.toFixed(7)}, ${lng.toFixed(7)}`;
    } catch (error) {
      console.error('addressToIac error:', error);
    }
    return null;
  }

module.exports = {
  addressToGPS
}
