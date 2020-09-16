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

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import ExternalMenu from './ExternalMenu'
import Menu from './Menu'
import Chapters from './Chapters'
import Disclaimer from './Disclaimer'
import Footer from './Footer'
import '../assets/styles/layout.scss'
import headerMobileLogo from '../assets/img/landing/logo_mobile.svg';

export const MenuContext = React.createContext({});

const externalPages = [
    { url: 'https://iota.org', title: 'iota' },
    { url: 'https://blog.iota.org', title: 'blog' },
    { url: 'https://docs.iota.org', title: 'docs' },
    { url: 'https://ecosystem.iota.org', title: 'ecosystem' }
]

export default ({ children }) => {
    if (window.location.pathname !== '/demo') {
        ReactGA.pageview(window.location.pathname);
    }
    const [showOverlay, toggleShowOverlay] = useState(false);

    function showNav() {
        toggleShowOverlay(true)
    }

    function closeNav() {
        toggleShowOverlay(false)
    }

    return (
        <MenuContext.Provider value={{ showMenu: showNav }}>
            {
                showOverlay ? <Chapters closeNav={closeNav} /> : (
                    <div className="page">
                        <Link to="/">
                            <img className="mobile-logo" src={headerMobileLogo} alt="logo" />
                        </Link>

                        <div className="show-nav" onClick={showNav} />
                        <div className="nav" id="nav">
                            <div className="close-nav" onClick={closeNav} />

                            <ExternalMenu
                                className="nav-external"
                                pages={externalPages}
                            />

                            <Menu onClick={showNav} />
                        </div>

                        { children }

                        <Footer />
                    </div>
                )
            }
            <Disclaimer />
        </MenuContext.Provider>
    )
}
