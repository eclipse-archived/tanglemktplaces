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
import image from '../../assets/img/content/Page29.png';
// import LanguageContext from '../../context/language-context'
// import TranslatedPage from '../de/industry4_language'

export default () => {
    window.scrollTo(0, 0);
    // const { language } = useContext(LanguageContext);
    // return language === 'de' ? <TranslatedPage /> : (
    return (
        <Layout>
            <div className="content-header">
                <Text className="title extra-large">Industry 4.0 language</Text>
            </div>
            <div className="content">
                <div className="_markdown_">
                    <p>To enable I4.0 components to collaborate with each other and to perform tasks in a cooperative manner, they must be able to speak a common language.</p>
                    <p>The recently published VDI/VDE-2193 Part 1 and Part 2 guideline describes the concept of I4.0 language for I4.0 components. This guideline explains the concept of semantically interoperable exchange of information and shows how to design the vocabulary, the messages, and their processes for information exchange in  I4.0 use cases. It forms the basis for I4.0-compliant communication and cooperation.</p>
                    <p>The I4.0 language can be regarded as a three-level set of rules that define the principles for building vocabulary, messages, and semantic interaction protocols.</p>
                </div>
                <div className="image-wrapper">
                    <img alt="" src={image} style={{ width: '85vw' }} />
                </div>
            </div>
            <div className="content-footer">
                <PreviousPage page="plattform_industrie4" />
                <NextPage page="vocabulary" />
            </div>
        </Layout>
    )
}
