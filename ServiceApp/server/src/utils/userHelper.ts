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


import axios from 'axios';
import yargs from 'yargs';
import { faucet, faucetAmount } from '../config.json';
import { createNewUser } from './credentialHelper';
import { writeData } from './databaseHelper';
import { generateNewWallet, getBalance } from './walletHelper.js';

const createUser = async () => {
    try {
        const { name, role = '', location = '' } = argv;	
        if (name && (role === 'SR' || role === 'SP')) {	
            console.log('Creating user...');
            createNewUser(name, role, location);	
        } else {	
            console.log('Params are missing or wrong');	
            return;	
        }	
    } catch (error) {
        console.error('Create user error', error);
    }
};

const createNewWallet = async () => {
    console.log('Creating wallet...');
    const wallet = generateNewWallet();
    const response = await axios.get(`${faucet}?address=${wallet.address}&amount=${faucetAmount}`);
    if (response.data.success) {
        const balance = await getBalance(wallet.address);
        await writeData('wallet', { ...wallet, balance });
    }
};

const argv = yargs
    .usage('Create new user or wallet')
    .example('$0 --create user --role SR --name user-SR-123 --location 47.934438,10.340688', 'Creates a new Service Requester with name user-SR-123')
    .required('create', 'Mode must be provided').describe('create', 'Create new user or wallet. Options: ["user", "wallet"]')
    .describe('role', 'Define user role. Options: ["SR", "SP"]')
    .describe('name', 'Define user name')
    .describe('location', 'Define location')
    .help('help')
    .options({
        create: { type: 'string', demandOption: true },
        name: { type: 'string' },
        role: { type: 'string' },
        location: { type: 'string' }
    })
    .argv;

if (argv.create === 'user') {
    createUser();
} else if (argv.create === 'wallet') {
    createNewWallet();
} else {
    console.log('Wrong mode. Possible modes: ["user", "wallet"]');
}
