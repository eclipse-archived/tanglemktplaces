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
import SensorCard from './sensor-card.js';

export default ({ schema, sensorData }) => (
  <InfoCol>
    <CardWrapper>
      {
        sensorData.length > 0 && sensorData.map((data, i) =>
            <SensorCard index={i} key={i} packet={data} schema={schema} />
        )
      }
    </CardWrapper>
  </InfoCol>
)

const InfoCol = styled.main`
  position: relative;
  width: 880px;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 455px;
    width: 1px;
    height: 100%;
    background-color: #738fd4;

    @media (max-width: 1195px) {
      left: 245px;
    }

    @media (max-width: 470px) {
      left: 300px;
    }
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 40px 0 200px;

  @media (max-width: 1195px) {
    flex-flow: column nowrap;
    padding-bottom: 0;
    margin-left: 30px;
    align-items: center;
  }
`;
