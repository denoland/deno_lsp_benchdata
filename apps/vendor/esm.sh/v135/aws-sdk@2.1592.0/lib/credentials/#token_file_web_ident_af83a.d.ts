import {Credentials} from '../credentials.d.ts';
import {AWSError} from '../error.d.ts';
import {ConfigurationOptions} from '../config-base.d.ts';
export class TokenFileWebIdentityCredentials extends Credentials {
    /**
     * Creates a new credentials object with optional configuraion.
     * @param {Object} clientConfig - a map of configuration options to pass to the underlying STS client.
     */
    constructor(clientConfig?: ConfigurationOptions);
    /**
     * Refreshes credentials using AWS.STS.assumeRoleWithWebIdentity().
     */
    refresh(callback: (err?: AWSError) => void): void;
}
