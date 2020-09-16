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

import classNames from 'classnames';
import React from 'react';
import ClickOutside from './ClickOutside';

import '../assets/styles/drop-selector.scss'

class DropSelector extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        };

        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }

    render() {
        return (
            <ClickOutside onClickOutside={this.state.isExpanded ? this.handleExpand : undefined}>
                <div className={classNames(
                    'drop-selector',
                    { 'drop-selector__expanded': this.state.isExpanded }
                )}
                style={this.props.style}>
                    <div className="drop-selector-title" onClick={this.handleExpand}>
                        <div className="drop-selector-title__text">{this.props.selected}</div>
                        <div className="drop-selector-title__icon"></div>
                    </div>
                    <ul className="drop-selector-list">
                        {this.props.items.filter(item => item !== this.props.selected).map(item => (
                            <li key={item} className={classNames(
                                'drop-selector-list-item',
                                { 'drop-selector-list-item__selected': item === this.props.selected }
                            )}>
                                <button onClick={() => this.props.callback(item)}>
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </ClickOutside>);
    }
}

export default DropSelector;