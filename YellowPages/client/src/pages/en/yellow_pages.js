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
                <Text className="title extra-large">Yellow Pages</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>The Yellow Pages component provides an overview of activities in the Industry Marketplace and is intended to be used by fleet management and similar systems which primarily listen for activities, or perform statistics and data analytics. The Yellow Pages component can integrate  with existing application and service coordination frameworks to provide an easy visualization of past and ongoing proposals, won/lost bids, and payments.</p>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="service_provider" />
                <NextPage page="use_cases" />
            </div>
        </Layout>
    )
}
