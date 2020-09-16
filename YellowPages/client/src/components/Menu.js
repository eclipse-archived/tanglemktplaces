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
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Button from './Button'
// import DropSelector from './DropSelector'
// import LanguageContext from '../context/language-context'
import headerLogo from '../assets/img/landing/logo.svg'

import '../assets/styles/menu.scss'

const Menu = ({ onClick }) => {
    // const { language, changeLanguage } = useContext(LanguageContext)

    return (
        <div className="menu">
            <div className="menu-logo">
                <Link to="/">
                    <img src={headerLogo} alt="logo" />
                </Link>
            </div>

            <div className="menu-links">
                {
                  /*
                  <DropSelector
                      items={['en', 'de']}
                      selected={language}
                      callback={changeLanguage}
                  />
                  */
                }
                <Link to="/join" className="btn mini primary menu-link mobile-only">
                    Join
                </Link>
                <Link to="/join" className="btn mini primary menu-link mobile-hidden">
                    Join & Participate
                </Link>
                <Button
                    icon="menu"
                    className="menu-link contents"
                    onClick={onClick}
                >
                    <span>Menu</span>
                </Button>
            </div>
        </div>
    )
}

export default withRouter(Menu)
