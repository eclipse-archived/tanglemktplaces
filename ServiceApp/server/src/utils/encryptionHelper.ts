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


import crypto from 'crypto';
import { DID, DIDDocument, ECDSAKeypair } from 'identity_ts';
import { readData } from './databaseHelper';
import { getAvailableProvider } from './iotaHelper';

export const encryptWithReceiversPublicKey = async (receiverId, keyId, payload) => {
    const provider = await getAvailableProvider();
    const document = await DIDDocument.readDIDDocument(provider, new DID(receiverId).GetUUID());
    const encryptedBuffer = await document.GetKeypair(keyId).GetEncryptionKeypair().PublicEncrypt(payload);
    return encryptedBuffer.toString('base64');
};

export const decryptWithReceiversPrivateKey = async (payload) => {
    const did: any = await readData('did');
    const messageBuffer = Buffer.from(payload.secretKey, 'base64');
    const encryptionKeypair = new ECDSAKeypair('', did.privateKey);
    const decryptedBuffer = await encryptionKeypair.PrivateDecrypt(messageBuffer);
    return decryptedBuffer.toString();
};

const algorithm =  'aes-256-cbc';

export interface IEncryptedData {
    key: Buffer;
    iv: Buffer;
    encoded: Buffer;
}

export function encryptWithCipher(text: string): IEncryptedData {
    const iv = crypto.randomBytes(16);
    const key = crypto.randomBytes(32);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
    const encrypted: Buffer = cipher.update(text);
    return { key: key, iv : iv, encoded: Buffer.concat([encrypted, cipher.final()]) };
}

export function decryptCipher(data: IEncryptedData): Buffer {
    const decipher = crypto.createDecipheriv(algorithm, data.key, data.iv);
    const decoded: Buffer = decipher.update(data.encoded);
    return Buffer.concat([decoded, decipher.final()]);
}
