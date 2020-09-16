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
import image from '../../assets/img/content/Page07.png'
// import LanguageContext from '../../context/language-context'
// import TranslatedPage from '../de/industry_marketplace'

export default () => {
    window.scrollTo(0, 0);
    // const { language } = useContext(LanguageContext);
    // return language === 'de' ? <TranslatedPage /> : (
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">The Industry Marketplace</Text>
                <Text className="subtitle">What is the Industry Marketplace?</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>Intelligent production is a novel concept, where Industry 4.0 components negotiate with each other to fulfill tasks with predefined characteristics in a defined period of time, with a defined quality of service, and a defined cost range. In order for I4.0 components to cooperate in such a way, they must be able to speak a common language within a shared communication and exchange infrastructure.</p>
                </div>
                <div className="image-wrapper">
                    <img alt="" src={image} style={{ width: '90vw' }} />
                </div>
                <div className="_markdown_">
                    <p>The Industry Marketplace establishes a vendor-neutral marketplace for I4.0 components to buy and sell goods, data and services. Unlike conventional virtual marketplaces, the Industry Marketplace is an autonomous and decentralized platform for offering and searching for data and services, free of charge and open to everyone.</p>
                    <p>A participant in the Industry Marketplace can take one of two roles: the role of Service Requester or Service Provider.</p>
                    <p>The Service Requester searches for some data or services, e.g. charging, transporting, drilling etc., offered by a Service Provider. The Service Requester distributes a call for proposal in which they specify their requested service. The Service Providers can then generate proposals in response.</p>
                    <p>Both the call for proposal and the proposal itself contain a technical and commercial description of the service. This can include, for example, the price, time, quality and place for the provision of a service.</p>
                    <p>The technical and commercial description uses the vocabulary of I4.0 provided by eCl@ss. In this way, the machines can automatically interpret the distributed  call for proposals with no need for human interaction.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="benefits_of_iota" />
                <NextPage page="market_manager" />
            </div>
        </Layout>
    )
}
