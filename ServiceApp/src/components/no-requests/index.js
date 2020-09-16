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
import createRequest from '../../assets/img/createRequest.svg';

export default ({ callback }) => (
  <NoAssetsOuterWrapper>
    <NoAssetsInnerWrapper>
      {
        callback ? (
          <React.Fragment>
            <Heading>You have no active requests</Heading>
            <Text>Why not create a new one?</Text>
            <ButtonWrapper>
              <Button onClick={callback}>
                <img src={createRequest} alt="Create request"/>
              </Button>
            </ButtonWrapper>
          </React.Fragment>
        ) : <Heading>There are no requests in this category</Heading>
      }
    </NoAssetsInnerWrapper>
  </NoAssetsOuterWrapper>
);

const NoAssetsOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const NoAssetsInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Button = styled.button`
  appearance: none;
  outline: none;

  &:hover {
    opacity: 0.9;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #485776;
  padding-top: 50px;
  margin: 0 40px;
`;

const Text = styled.h4`
  font-size: 1.4rem;
  font-weight: 600;
  color: #485776;
  padding: 20px 0;
`;
