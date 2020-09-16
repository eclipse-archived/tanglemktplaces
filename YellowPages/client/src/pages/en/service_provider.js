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
// import TranslatedPage from '../de/market_manager'

export default () => {
    window.scrollTo(0, 0);
    // const { language } = useContext(LanguageContext);
    // return language === 'de' ? <TranslatedPage /> : (
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">The Service Provider Role</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>The Service Provider (SP) listens on the Tangle for incoming CfP’s. The incoming CfP’s are filtered by the provider’s criteria. For example, it is unnecessary for a provider of a manufacturing service to process mobility-as-a-service CfPs. If a CfP matches the SP’s criteria, the SP proposes a sale price. The SP can freely configure the filter attributes to only receive proposals that match the SP’s delivery portfolio.</p>
                    <p>Through the IOTA Tangle and its decentralized identity (DID) system, the SP can ensure that CfP’s are from real participants. The SP also utilizes the DID system to demonstrate authenticity to other participants.</p>
                    <p>If the placed proposal is accepted by the SR, the SP initiates delivery. After the SR has confirmed the service provision, the SP receives payment directly through the Marketplace’s integrated currency, the IOTA token.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="service_requester" />
                <NextPage page="yellow_pages" />
            </div>
        </Layout>
    )
}
