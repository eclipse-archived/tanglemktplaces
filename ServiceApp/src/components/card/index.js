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
  max-width: 1030px;
  color: inherit;
  text-decoration: none;
  margin-bottom: 54px;
  border-radius: 6px;
  background-color: #fff;
  cursor: default;
  transition: box-shadow 0.19s ease-out;

  height: 100%;
  width: 100%;
  border: 2px solid #eaecee;
  @media (min-width: 769px) {
  }
  &:hover {
    box-shadow: 0 23px 50px 0 rgba(25, 54, 80, 0.1);
  }
`;

const CardHeader = styled.header`
  position: relative;
  padding: 10px 30px;
  border-bottom: 1px solid #eaecee;
`;

const CardFooter = styled.footer`
  padding: 20px 30px;
  background-color: rgba(206, 218, 226, 0.2);
  border-top: 1px solid #eaecee;
  cursor: default;
`;
