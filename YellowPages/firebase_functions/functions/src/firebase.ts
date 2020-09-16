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

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

exports.storeMessage = async (message: any) => {
  // Save message
  await admin
    .firestore()
    .collection('messages')
    .doc(message.frame.conversationId)
    .set(message);

  return true;
};

exports.getMessages = async (timestamp: string) => {
  // Get messages not older than given timestamp
  const querySnapshot = await admin
    .firestore()
    .collection('messages')
    .where('frame.replyBy', '>', Number(timestamp))
    .orderBy('frame.replyBy', 'desc')
    .limit(500)
    .get();

  if (querySnapshot.size === 0) return [];

  // Return data
  return querySnapshot.docs.map(doc => {
    if (doc.exists) {
      return doc.data();
    } else {
      console.log('getMessages failed.', timestamp, doc);
      return null;
    }
  });
};

exports.getGoogleMapsApiKey = async () => {
  const doc = await admin
    .firestore()
    .collection('settings')
    .doc('settings')
    .get();
  if (doc.exists) {
    const data = doc.data();
    if (data.googleMapsApiKey) {
      return data.googleMapsApiKey;
    }
  }
  console.log('getGoogleMapsApiKey failed. Setting does not exist', doc);
  throw Error(`The getGoogleMapsApiKey setting doesn't exist.`);
};

exports.getEmailSettings = async () => {
  const doc = await admin
    .firestore()
    .collection('settings')
    .doc('settings')
    .get();
  if (doc.exists) {
    const data = doc.data();
    return data.email || null;
  }
  console.error('getEmailSettings failed. Setting does not exist', doc);
  throw Error(`The getEmailSettings setting doesn't exist.`);
};

exports.getNodeSettings = async () => {
  const doc = await admin
    .firestore()
    .collection('settings')
    .doc('settings')
    .get();
  if (doc.exists) {
    const data = doc.data();

    delete data.email;
    delete data.googleMapsApiKey;

    return data;
  }
  console.log('getNodeSettings failed. Setting does not exist', doc);
  throw Error(`The getNodeSettings setting doesn't exist.`);
};