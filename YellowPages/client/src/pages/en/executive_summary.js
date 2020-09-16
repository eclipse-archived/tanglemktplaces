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
import image from '../../assets/img/content/Page01.png'
// import LanguageContext from '../../context/language-context'
// import TranslatedPage from '../de/executive_summary'

export default () => {
    window.scrollTo(0, 0);
    // const { language } = useContext(LanguageContext);
    // return language === 'de' ? <TranslatedPage /> : (
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">Executive Summary</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>The next generation of industrial automation, Industry 4.0 (I4.0), is rapidly approaching. In tomorrow's world, devices will contain not only asset information, but proactive decision and optimization algorithms that enable goal-oriented behavior among their components. Such I4.0 devices can be viewed as autonomous independent economic agents that cooperate according to market economy principles.</p>
                    <p>The highly flexible value creation networks that result from I4.0 will require new forms of collaboration between companies - both at a national and global level.  And the successful implementation of I4.0 will depend on the creation of a common global communication and computing infrastructure that allows economic relationships between machines.</p>
                    <p>The Industry Marketplace is a vendor and industry-neutral platform that automates the trade of physical and digital goods / services and enables I4.0. Building on specifications developed by the Plattform Industrie 4.0 (Germany’s central network for the advancement of digital transformation in manufacturing), the Industry Marketplace combines distributed ledger technology, immutable audit logs, and standardized, machine-readable contracts with an integrated decentralized identity system, to enable secure communication and payments across the industry landscape.</p>
                    <p>By combining the latest technology with established standards and openly-developed specifications, the Industry Marketplace provides a platform for the economy of things.</p>
                    <p>The Industry Marketplace has been developed as an open source initiative and is free to join. You can run a simple trial at your office to explore its potential. We encourage open innovation with other industry partners to explore new business models and the many possibilities of industrial automation.</p>
                    <h3>Key features</h3>
                    <ul>
                        <li>Vendor and industry-neutral platform and communication </li>
                        <li>Standardised communication for contracts, product data, purchasing, bids, orders, services</li>
                        <li>Implementation of the I4.0 principles for driving forward digitalization and manufacturing</li>
                        <li>Semantic language, based on open specifications, developed by Plattform Industrie 4.0 and academic institutions</li>
                        <li>A decentralized and globally accessible protocol with paramount security</li>
                        <li>Low system requirements</li>
                        <li>Open source software</li>
                        <li>Integrated, decentralized ID, to ensure the authenticity of all participants</li>
                        <li>Integrated payment option for goods and services, without transaction fees </li>
                        <li>Payment queues to execute outgoing payments in high frequency environments, e.g. buying many individual data sets, like weather data </li>
                        <li>Immutable audit logs for every step (including payments) to be compliant with regulatory requirements</li>
                        <li>Digital trust as a design principle throughout the IOTA Tangle</li>
                    </ul>
                </div>
                <div className="image-wrapper">
                    <img alt="" src={image} style={{ width: '85vw' }} />
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="" />
                <NextPage page="introduction_to_industry4" />
            </div>
        </Layout>
    )
}
