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


import axios from 'axios';
import { addressApi } from '../../config.json';

const locationFormats = [
  {
    name: 'GPS Coordinates',
    action: async (sendMessage, gps, props) => await sendMessage({ gps, ...props })
  },
  {
    name: 'Address',
    action: async (sendMessage, address, props) => {
      // convert to GPS
      const res = await axios.get(`${addressApi}?address=${encodeURI(address)}`);
      const gps = res.data;
      return await sendMessage({ gps, ...props });
    }
  }
]

export default locationFormats;
