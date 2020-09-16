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
import Slider from 'react-slick';
import next from '../assets/img/video/arrow-right.svg';
import prev from '../assets/img/video/arrow-left.svg';

export default ({ items }) => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <img {...props} src={prev} alt="" />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <img {...props} src={next} alt="" />
    );

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
    };
    
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="slider-content">
              {item}
            </div>
          ))}
        </Slider>
      </div>
    );
}
