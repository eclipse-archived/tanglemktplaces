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

import React, { Component } from 'react';
import LanguageContext from './language-context';

class GlobalState extends Component {
  state = {
    language: 'en'
  };

  changeLanguage = async (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <LanguageContext.Provider value={{
          language: this.state.language,
          changeLanguage: this.changeLanguage
      }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default GlobalState;