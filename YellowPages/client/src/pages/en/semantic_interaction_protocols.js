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
import image1 from '../../assets/img/content/Page11.png';
import image2 from '../../assets/img/content/Page12.png';
// import LanguageContext from '../../context/language-context'
// import TranslatedPage from '../de/semantic_interaction_protocols'

export default () => {
    window.scrollTo(0, 0);
    // const { language } = useContext(LanguageContext);
    // return language === 'de' ? <TranslatedPage /> : (
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">Semantic interaction protocols</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>Semantic interaction protocols are used to define a sequence of exchanged messages for some application scenario. One example is the organizing of cooperation between Cyber-Physical Systems with the "bidding process" interaction protocol.</p>
                </div>
                <div className="image-wrapper">
                    <img alt="" src={image1} style={{ width: '95vw' }} />
                </div>
                <div className="_markdown_">
                    <p>The interaction protocol "Bidding process" presented in VDI/VDE 2193-2 makes highly flexible cooperation relationships possible between I4.0 components, especially if the tasks have to be distributed. The aim is to achieve legally binding value chains across company boundaries, in which each participating I4.0 component assumes a task as agreed in the tendering procedure. A legal study on the use of the tendering procedure proposed in VDI/VDE 2193-2 has shown that a legally valid contract is concluded if the terms and conditions of business are mutually accepted. Special details that can be machine-interpreted in the form of features (e.g. technical description of a service, delivery period, price, fulfilment of certain standards, guarantee period) are then subject to negotiation. This makes the interaction pattern suitable for use in value chains.</p>
                </div>
                <div className="image-wrapper">
                    <img alt="" src={image2} style={{ width: '95vw' }} />
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="message_structure" />
                <NextPage page="project_partners" />
            </div>
        </Layout>
    )
}
