import {Credentials} from '../credentials.d.ts';
import {HTTPOptions} from '../config-base.d.ts';
export class ProcessCredentials extends Credentials {
    /**
     * Creates a new ProcessCredentials object.
     */
    constructor(options?: ProcessCredentialsOptions);
}

interface ProcessCredentialsOptions {
    profile?: string
    filename?: string
    httpOptions?: HTTPOptions
}
