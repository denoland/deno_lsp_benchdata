import {Credentials} from '../credentials.d.ts';
import SSO = require('../../clients/sso.d.ts');
import { HTTPOptions } from '../config-base.d.ts';
export class SsoCredentials extends Credentials {
    /**
     * Creates a new SsoCredentials object.
     */
    constructor(options?: SsoCredentialsOptions);
}

interface SsoCredentialsOptions {
    httpOptions?: HTTPOptions,
    profile?: string;
    filename?: string;
    ssoClient?: SSO;
}
