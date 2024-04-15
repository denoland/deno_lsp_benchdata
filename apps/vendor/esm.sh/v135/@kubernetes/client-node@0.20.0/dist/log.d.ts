/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import request = require('https://esm.sh/v135/@types/request@2.48.12/index.d.ts');
import { Writable } from 'https://esm.sh/v135/@types/node@18.16.19/stream.d.ts';
import { KubeConfig } from './config.d.ts';
export interface LogOptions {
    /**
     * Follow the log stream of the pod. Defaults to false.
     */
    follow?: boolean;
    /**
     * If set, the number of bytes to read from the server before terminating the log output. This may not display a
     * complete final line of logging, and may return slightly more or slightly less than the specified limit.
     */
    limitBytes?: number;
    /**
     * If true, then the output is pretty printed.
     */
    pretty?: boolean;
    /**
     * Return previous terminated container logs. Defaults to false.
     */
    previous?: boolean;
    /**
     * A relative time in seconds before the current time from which to show logs. If this value precedes the time a
     * pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will
     * be returned. Only one of sinceSeconds or sinceTime may be specified.
     */
    sinceSeconds?: number;
    /**
     * If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation
     * of the container or sinceSeconds or sinceTime
     */
    tailLines?: number;
    /**
     * If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false.
     */
    timestamps?: boolean;
}
export declare class Log {
    config: KubeConfig;
    constructor(config: KubeConfig);
    log(namespace: string, podName: string, containerName: string, stream: Writable, options?: LogOptions): Promise<request.Request>;
    /** @deprecated done callback is deprecated */
    log(namespace: string, podName: string, containerName: string, stream: Writable, done: (err: any) => void, options?: LogOptions): Promise<request.Request>;
}
