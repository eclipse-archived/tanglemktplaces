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
// import TranslatedPage from '../de/architecture'

export default () => {
    window.scrollTo(0, 0);
    // const { language } = useContext(LanguageContext);
    // return language === 'de' ? <TranslatedPage /> : (
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">XXX</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>XXX</p>
                    <div className="image-wrapper">
                        <img src="../static/scalability/blockchain_bottleneck.gif"/>
                    </div>
                    <p>XXX</p>
                    <p>XXX</p>
                    <ul>
                        <li>XXXXX</li>
                        <li>XXXXXX</li>
                    </ul>
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="" />
                <NextPage page="" />
            </div>
        </Layout>
    )
}
