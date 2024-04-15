/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import request = require('https://esm.sh/v135/@types/request@2.48.12/index.d.ts');
import { Duplex } from 'https://esm.sh/v135/@types/node@18.16.19/stream.d.ts';
import { KubeConfig } from './config.d.ts';
export interface WatchUpdate {
    type: string;
    object: object;
}
export interface RequestResult {
    pipe(stream: Duplex): void;
    on(ev: string, cb: (arg: any) => void): void;
    removeAllListeners(ev: string): void;
    abort(): void;
}
export interface Response {
    statusCode: number;
    statusMessage: string;
}
export interface RequestInterface {
    webRequest(opts: request.OptionsWithUri): RequestResult;
}
export declare class DefaultRequest implements RequestInterface {
    private requestImpl;
    constructor(requestImpl?: (opts: request.OptionsWithUri) => request.Request);
    webRequest(opts: request.OptionsWithUri): RequestResult;
}
export declare class Watch {
    static SERVER_SIDE_CLOSE: object;
    config: KubeConfig;
    private readonly requestImpl;
    constructor(config: KubeConfig, requestImpl?: RequestInterface);
    watch(path: string, queryParams: any, callback: (phase: string, apiObj: any, watchObj?: any) => void, done: (err: any) => void): Promise<any>;
}
