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
import Layout from '../components/Layout'
import Intro from '../components/Intro'
import Features from '../components/Features'
import ContactForm from '../components/ContactForm'
import Logotypes from '../components/Logotypes';
import WhatIsMarketplace from '../components/WhatIsMarketplace';
import KeyComponents from '../components/KeyComponents';
import CallToAction from '../components/CallToAction';
import WhatTheySay from '../components/WhatTheySay';
import HowItWorks from '../components/HowItWorks';
import RequestMap from '../components/RequestMap';

export default () => {
    return (
        <Layout>
            <div className="intro-page">
                <section className="content-main">
                    <Intro />
                    <Logotypes />
                    <WhatIsMarketplace />
                    <HowItWorks />
                    <Features />
                    <WhatTheySay />
                    <RequestMap />
                    <KeyComponents />
                    <CallToAction />
                    <ContactForm />
                </section>
            </div>
        </Layout>
    )
}
