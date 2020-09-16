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

export default props => {
  return (
    <Card data-component="AssetCard">
      {props.header ? <CardHeader>{props.header}</CardHeader> : null}
      {props.children}
      {props.footer ? <CardFooter>{props.footer}</CardFooter> : null}
    </Card>
  );
}

const Card = styled.div`
  color: inherit;
  text-decoration: none;
  position: relative;
  border-radius: 6px;
  background-color: #FFFFFF;
  cursor: default;
  width: 850px;
  height: 100%;
  border: 1px solid #F2F5FB;
  @media (max-width: 1120px) {
    margin-bottom: 20px;
  }
  @media (max-width: 890px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 280px;
  }
`;

const CardHeader = styled.header`
  position: relative;
  padding: 20px 30px;
  border-bottom: 1px solid #eaecee;
`;

const CardFooter = styled.footer`
  padding: 20px 30px;
  background-color: rgba(206, 218, 226, 0.2);
  border-top: 1px solid #eaecee;
  cursor: default;
`;
