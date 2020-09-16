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
import styled from 'styled-components';
import { ExpansionList, ExpansionPanel, Switch } from 'react-md';
import MessageContent from './content';
import './index.scss';

class List extends Component {
  state = {
    expanded: false,
    expandedPanels: [],
  };

  onExpandToggle = (toggleOpen, key) => {
    const { expandedPanels } = this.state;
    if (toggleOpen) {
      this.setState({ expandedPanels: [...expandedPanels, key] }, () => this.setSwitchState());
    } else {
      const index = expandedPanels.indexOf(key);
      if (index > -1) {
        expandedPanels.splice(index, 1);
        this.setState({ expandedPanels: [...expandedPanels] }, () => this.setSwitchState());
      }
    }
  };

  setSwitchState = () => {
    const { expandedPanels } = this.state;
    const { messages } = this.props;
    if (expandedPanels.length === messages.length) {
      this.setState({ expanded: true });
    } else if (expandedPanels.length === 0) {
      this.setState({ expanded: false });
    }
  };

  toggleExpandedState = expanded => {
    if (!expanded) {
      this.setState({ expanded, expandedPanels: [] });
    } else {
      this.setState({
        expanded,
        expandedPanels: Array.from(new Array(this.props.messages.length), (x, i) => i),
      });
    }
  };

  render() {
    const { messages } = this.props;
    const { expanded } = this.state;
    return (
      <Panel>
        <Switch
          id="expand-all"
          type="switch"
          label="Expand all"
          name="expand-all"
          checked={expanded}
          onChange={this.toggleExpandedState}
        />
        <ExpansionList className="md-cell md-cell--12">
          {messages.map((message, index) => (
            <ExpansionPanel
              key={index}
              label={index}
              footer={null}
              expanded={this.state.expandedPanels.includes(index)}
              onExpandToggle={toggleOpen => this.onExpandToggle(toggleOpen, index)}
            >
              <MessageContent message={message} />
            </ExpansionPanel>
          ))}
        </ExpansionList>
      </Panel>
    );
  }
}

export default List;

const Panel = styled.div`
  padding: 30px;
  width: 95%;
  background-color: rgba(195,208,228,0.4);

  @media (min-width: 760px) {
    width: 80%;
  }

  @media (min-width: 1196px) {
    margin-left: 30px;
  }
`;