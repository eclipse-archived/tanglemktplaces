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
import api from '../utils/api';
import UserContext from './user-context';

class GlobalState extends Component {
  state = {
    user: {}
  };

  async componentDidMount() {
    await this.getUser();
    this.timer = setInterval(() => this.getUser(), 2 * 60 * 1000);
  }

  getUser = async () => {
    const user = await api.get('user');
    this.setState({ user });
    return user;
  };

  render() {
    return (
      <UserContext.Provider value={{
          user: this.state.user,
          getUser: this.getUser
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default GlobalState;