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
import { withCookies } from 'react-cookie';

class Cookie extends React.Component {
  state = { ack: true }

  componentDidMount() {
    const ack = this.props.cookies.get('industry-marketplace-ack');
    if (!ack) {
      document.getElementById('main').classList.add('cookie-bar-bottom-bar');
      this.setState({ ack: false });
    }
  }

  dismiss = () => {
    this.props.cookies.set('industry-marketplace-ack', true, { path: '/' });
    document.getElementById('main').classList.remove('cookie-bar-bottom-bar');
    this.setState({ ack: true })
  }

  render() {
    if (this.state.ack) return null;

    return (
      <div className="disclaimer">
      <span className="disclaimer-text">
        This website uses cookies to ensure you get the best experience on our
        website.&nbsp;
        <a
          className="disclaimer-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.iota.org/research/privacy-policy"
        >
        Learn more
        </a>
      </span>
      <button className="button" onClick={this.dismiss}>Dismiss</button>
    </div>
    )
  }
}

export default withCookies(Cookie);
