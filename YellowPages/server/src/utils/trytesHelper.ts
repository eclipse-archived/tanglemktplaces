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
import { decodeNonASCII } from './textHelper';

/**
 * Convert an object from Trytes.
 * @param trytes The trytes to decode.
 * @returns The decoded object.
 */
export const fromTrytes = (trytes) => {
    // Trim trailing 9s
    let trimmed = trytes.replace(/\9+$/, '');

    // And make sure it is even length (2 trytes per ascii char)
    if (trimmed.length % 2 === 1) {
        trimmed += '9';
    }

    const ascii = trytesToAscii(trimmed);
    return decodeNonASCII(ascii);
    // return json ? JSON.parse(json) : undefined;
};
