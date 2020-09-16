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
// import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import PreviousPage from '../../components/PreviousPage'
import NextPage from '../../components/NextPage'
import Text from '../../components/Text'
// import LanguageContext from '../../context/language-context'
// import TranslatedPage from '../de/register_did'

export default () => {
    window.scrollTo(0, 0);
    // const { language } = useContext(LanguageContext);
    // return language === 'de' ? <TranslatedPage /> : (
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">Register your Decentralized ID</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>The decentralized identity system enables participants of the Industry Marketplace to assign a unique identity to their clients, which cannot be counterfeited.</p>
                    <p>This is a prerequisite to form legal contracts and discard fake bids. Registering your component with the IOTA Foundation will add your instance to a whitelist.<br />Your instance will see all proposals and bids of all participants on the default setting. After your instance has been registered, you can change the setting to receive only activities from other registered participants. </p>
                    <p>Corporate environments will benefit most from this setting, as it heavily reduces fake bids.</p>
                    <p>This registration is available for enterprise-, academic, and public bodies, as well as reputable IOTA  community members.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="join" />
                <NextPage page="iota_tangle" />
            </div>
        </Layout>
    )
}
