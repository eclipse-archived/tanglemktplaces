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

import React from 'react';
import styled from 'styled-components';
import { Marker } from 'react-map-gl';

export default ({ assets, openPopup }) => (
  <div>
    {
      assets && assets.map((asset, i) => (
        <Marker latitude={asset.latitude} longitude={asset.longitude} key={`marker-${i}`}>
          <Pin
            onClick={() => openPopup(asset)}
            type={asset.type}
          >
            { asset.type === 'callForProposal' && <I className="fas fa-euro-sign"></I> }
            { asset.type === 'proposal' && <I className="fas fa-exclamation"></I> }
            { asset.type === 'acceptProposal' && <I className="fas fa-check"></I> }
          </Pin>
        </Marker>
      ))
    }
  </div>
)

const Pin = styled.div`
  background-color: ${props => {
    switch (props.type) {
      case 'proposal':
        return '#009fff';
      case 'acceptProposal':
        return '#53aca8';
      case 'callForProposal':
      default:
        return '#184490';
    }
  }};
  position: absolute;
  height: 40px;
  width: 40px;
  top: -30px;
  right: -15px;
  transform: rotate(-45deg);
  border-radius: 50% 50% 50% 0;
  cursor: pointer !important;
  box-shadow: -10px 9px 12px 0 rgba(10, 32, 87, 0.12);
`;

const I = styled.i`
  position: absolute;
  height: 40px;
  right: 0px;
  transform: rotate(45deg);
  color: #ffffff;

  &.fa-euro-sign {
    width: 38px;
    top: 18px;
  }
  &.fa-exclamation {
    width: 37px;
    top: 21px;
  }
  &.fa-check {
    width: 40px;
    top: 18px;
  }
`;
