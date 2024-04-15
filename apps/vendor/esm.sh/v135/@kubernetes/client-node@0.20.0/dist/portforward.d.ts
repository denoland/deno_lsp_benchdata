/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
/// <reference path="https://esm.sh/v135/@types/ws@8.5.10/index.d.ts" />
import WebSocket = require('https://esm.sh/v135/isomorphic-ws@5.0.0/index.d.ts');
import stream = require('https://esm.sh/v135/@types/node@18.16.19/stream.d.ts');
import { KubeConfig } from './config.d.ts';
import { WebSocketInterface } from './web-socket-handler.d.ts';
export declare class PortForward {
    private readonly handler;
    private readonly disconnectOnErr;
    constructor(config: KubeConfig, disconnectOnErr?: boolean, handler?: WebSocketInterface);
    portForward(namespace: string, podName: string, targetPorts: number[], output: stream.Writable, err: stream.Writable | null, input: stream.Readable, retryCount?: number): Promise<WebSocket | (() => WebSocket | null)>;
}
