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

import React from 'react'
import iota from '../assets/img/logos/iota.svg'
import eclass from '../assets/img/logos/eclass.svg';
import hsu from '../assets/img/logos/hsu.svg';
import neoception from '../assets/img/logos/neoception.svg';
import ovgu from '../assets/img/logos/ovgu.svg';
import wewash from '../assets/img/logos/wewash.svg';

import '../assets/styles/content.scss'

export default () => (
    <div className="logotypes-wrapper">
        <img src={eclass} alt="eclass" />
        <img src={neoception} alt="neoception" />
        <img src={ovgu} alt="ovgu" />
        <img src={hsu} alt="hsu" />
        <img src={wewash} alt="wewash" />
        <img src={iota} alt="IOTA" />
    </div>
)

