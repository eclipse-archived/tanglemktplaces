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
import Text from './Text'
import illustration from '../assets/img/landing/illustration.svg';

import '../assets/styles/content.scss'

export default () => (
    <div className="marketplace-wrapper">
        <img src={illustration} alt="" />
        <div className="marketplace-text-wrapper">
            <Text className="title">What is the <br />Industry Marketplace?</Text>
            <Text>The Industry Marketplace is a vendor and industry-neutral platform, automating the trading of physical and digital goods and services.</Text>
            <Text>Building on specifications developed by the Plattform Industrie 4.0 (Germany's central network for the advancement of digital transformation in manufacturing), it combines distributed ledger technology, immutable audit logs and standardized, machine-readable contracts to accelerate industrial automation and enable the "economy of things".</Text>
        </div>
    </div>
)
