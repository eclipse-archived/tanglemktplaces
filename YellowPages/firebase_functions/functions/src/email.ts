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

const ax = require('axios');
const mailgun = require('mailgun-js');
const { getEmailSettings } = require('./firebase');

const mailgunSendEmail = async (packet: any, emailSettings: any) => {
    try {
        const {
            apiKey, domain, emailRecipient, emailBcc, emailReplyTo, emailSender, emailList,
        } = emailSettings;
        const mg = mailgun({ apiKey, domain });
        const result: any = {}; 

        const messapeP = new Promise((resolve, reject) => {
            mg.messages().send({
                from: `Industry Marketplace <${emailSender}>`,
                to: emailRecipient,
                bcc: emailBcc,
                'h:Reply-To': packet.email,
                subject: 'Industry Marketplace Form Inquiry',
                html: `<div>
                    <p><strong>Name: </strong>   ${packet.name}</p>
                    </div>
                    <div>
                    <p><strong>Email: </strong>   ${packet.email}</p>
                    </div>
                    <div>
                    <p><strong>Message:</strong></p><p>${packet.message}</p>
                    </div>
                    <div>
                    <p><strong>Newsletter: </strong>   ${packet.newsletter}</p>
                    </div>`,
            }, (error: any, response: any) => {
                if (error) {
                    console.error('Email callback error', error);
                    result.emailError = error;
                    reject(error);
                }
                result.email = response;
                resolve(response);
            });
        });

        let messapeListP;
        if (packet.newsletter.toString() === 'true') {
            //Add to pending list and send out confirmation email 
            ax.post('https://newsletter-api.iota.org/api/signup', {
                email: packet.email,
                projectID: 'IMP'
            })
            .then(() => {
                const list = mg.lists(emailList);
                const user = {
                    subscribed: true,
                    address: packet.email,
                    name: packet.name
                };

                messapeListP = new Promise((resolve) => {
                    list.members().create(user, (error: any, response: any) => {
                        if (error) {
                            console.error('Email members callback error', error);
                            result.emailListError = error;
                            resolve(error);
                        }
                        result.emailList = response;
                        resolve(response);
                    });
                });
            }, (error) => {
                console.error(error);
            });
        } else {
            messapeListP = Promise.resolve();
        }

        const replyP = new Promise((resolve, reject) => {
            if (packet.newsletter.toString() === 'false') {
                mg.messages().send({
                    from: `Industry Marketplace <${emailSender}>`,
                    to: packet.email,
                    'h:Reply-To': emailReplyTo,
                    subject: 'Message Received - Industry Marketplace',
                    html: `Hi
                    <br/>
                    <br/>
                    Many thanks for your interest in the IOTA Industry Marketplace.
                    <br/>
                    <br/>

                    We do our best to review all messages and get in touch with prioritized use cases and organizations based on their ability to contribute and impact the development of this proof of concept.
                    <br/>
                    <br/>

                    The whole IOTA team thanks you again for your interest and is looking forward to collaborating with you.
                    <br/>
                    <br/>

                    IOTA Foundation
                    <br/>
                    www.iota.org`,
                }, (error: any, response: any) => {
                    if (error) {
                        console.error('Email automatic reply error', error);
                        result.emailReplyError = error;
                        reject(error);
                    }
                    result.emailReply = response;
                    resolve(response);
                });
            } else {
                resolve();
            }
        });
        return Promise.all([messapeP, messapeListP, replyP]).then(() => result);
    } catch (error) {
        console.error(error);
    }
};

exports.sendEmail = async (packet: any) => {
    const emailSettings = await getEmailSettings();

    // Send message
    const result = await mailgunSendEmail(packet, emailSettings);
    return result;
};
