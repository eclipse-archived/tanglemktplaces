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
import styled from 'styled-components';
import { Switch } from 'react-md';
import AssetCard from '../card/asset';
import NoRequests from '../no-requests';

export default props => {
  const [trustLevel, limitTrustLevel] = useState(0);
  const assets = props.assets.filter(asset => asset.trustLevel >= trustLevel);

  function toggleTrustLevel(selected) {
    selected ? limitTrustLevel(2) : limitTrustLevel(0);
  }

  return (
    <React.Fragment>
      <CountTrustWrapper>
        <CountWrapper>
          Active: {assets.length}
        </CountWrapper>
        <TrustWrapper>
          <Switch
            id="trustLevel"
            type="switch"
            label="Filter Trusted Requests"
            name="trustLevel"
            checked={trustLevel === 2}
            onChange={toggleTrustLevel}
          />
        </TrustWrapper>
      </CountTrustWrapper>
      {
        assets && assets.length ? (
          <InfoCol>
            <CardWrapper>
              {
                assets && assets.map(asset => (
                  <AssetCard key={asset.storageId ? asset.storageId : asset.id} asset={asset} />
                ))
              }
            </CardWrapper>
          </InfoCol>
        ) : <NoRequests />
      }
    </React.Fragment>
  )
}

const CountTrustWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 0;
`;

const CountWrapper = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #485776;
`;

const TrustWrapper = styled.div`
  #trustLevel-label {
    font-size: 22px;
    font-weight: 600;
    color: #485776;
  }
`;

const InfoCol = styled.div`
  position: relative;

  @media (max-width: 760px) {
    width: 100%;
    padding: 0;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 40px;
  @media (max-width: 1195px) {
    flex-flow: column nowrap;
    padding-bottom: 0;
  }
  @media (max-width: 760px) {
    width: 100%;
    align-items: center;
  }
`;
