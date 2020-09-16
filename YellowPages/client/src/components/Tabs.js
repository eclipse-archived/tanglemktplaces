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

import React, { PureComponent } from 'react';
import { TabsContainer, Tabs, Tab } from 'react-md';

class AssetTabs extends PureComponent {
  state = {
    activeTabIndex: 0,
  };

  onTabChange = newActiveTabIndex => {
    this.setState({ activeTabIndex: newActiveTabIndex });
    this.props.onTabChange(newActiveTabIndex);
  };

  render() {
    return (
        <TabsContainer
            activeTabIndex={this.state.activeTabIndex}
            onTabChange={this.onTabChange}
        >
            <Tabs tabId="request-details">
                <Tab label="Calls for Proposal" className="cfp" />
                <Tab label="Proposals" className="proposal" />
                <Tab label="Accepted Proposals" className="acceptProposal" />
            </Tabs>
        </TabsContainer>
    );
  }
}

export default AssetTabs;