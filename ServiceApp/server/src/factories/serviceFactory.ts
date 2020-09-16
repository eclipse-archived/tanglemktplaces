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


/**
 * Factory for creating services.
 */
export class ServiceFactory {
    /**
     * Store the service callbacks.
     */
    private static readonly _services: { [name: string]: () => any } = {};
    /**
     * Store the created instances.
     */
    private static readonly _instances: { [name: string]: any } = {};

    /**
     * Register a new service.
     * @param name The name of the service.
     * @param instanceCallback The callback to create an instance.
     */
    public static register(name: string, instanceCallback: () => any): void {
        this._services[name] = instanceCallback;
        if (this._instances[name]) {
            delete this._instances[name];
        }
    }

    /**
     * Unregister a service.
     * @param name The name of the service to unregister.
     */
    public static unregister(name: string): void {
        delete this._services[name];
        if (this._instances[name]) {
            delete this._instances[name];
        }
    }

    /**
     * Get a service instance.
     * @param name The name of the service to get.
     * @returns An instance of the service.
     */
    public static get<T>(name: string): T {
        if (!this._instances[name] && this._services[name]) {
            this._instances[name] = this._services[name]();
        }
        return this._instances[name];
    }
}
