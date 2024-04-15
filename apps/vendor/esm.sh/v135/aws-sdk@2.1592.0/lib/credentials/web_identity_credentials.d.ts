import {Credentials} from '../credentials.d.ts';
import {AWSError} from '../error.d.ts';
import {ConfigurationOptions} from '../config-base.d.ts';
import STS = require('../../clients/sts.d.ts');
export class WebIdentityCredentials extends Credentials {
    /**
     * Creates a new credentials object with optional configuraion.
     * @param {Object} options - a map of options that are passed to the AWS.STS.assumeRole() or AWS.STS.getSessionToken() operations. If a RoleArn parameter is passed in, credentials will be based on the IAM role.
     * @param {Object} clientConfig - a map of configuration options to pass to the underlying STS client.
     */
    constructor(options: WebIdentityCredentials.WebIdentityCredentialsOptions, clientConfig?: ConfigurationOptions);
    /**
     * Creates a new credentials object.
     * @param {string} options - a map of options that are passed to the AWS.STS.assumeRole() or AWS.STS.getSessionToken() operations. If a RoleArn parameter is passed in, credentials will be based on the IAM role.
     */
    constructor(options?: WebIdentityCredentials.WebIdentityCredentialsOptions);
    /**
     * Refreshes credentials using AWS.STS.assumeRoleWithWebIdentity().
     */
    refresh(callback: (err?: AWSError) => void): void;

    data: STS.Types.AssumeRoleWithWebIdentityResponse;
    params: STS.Types.AssumeRoleWithWebIdentityRequest
}

// Needed to expose interfaces on the class
declare namespace WebIdentityCredentials {
    export type ClientConfiguration = ConfigurationOptions;
    export type WebIdentityCredentialsOptions = STS.AssumeRoleWithWebIdentityRequest;
}
