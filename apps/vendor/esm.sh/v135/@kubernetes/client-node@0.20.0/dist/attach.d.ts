/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
/// <reference path="https://esm.sh/v135/@types/ws@8.5.10/index.d.ts" />
import WebSocket = require('https://esm.sh/v135/isomorphic-ws@5.0.0/index.d.ts');
import stream = require('https://esm.sh/v135/@types/node@18.16.19/stream.d.ts');
import { KubeConfig } from './config.d.ts';
import { WebSocketInterface } from './web-socket-handler.d.ts';
export declare class Attach {
    'handler': WebSocketInterface;
    private terminalSizeQueue?;
    constructor(config: KubeConfig, websocketInterface?: WebSocketInterface);
    attach(namespace: string, podName: string, containerName: string, stdout: stream.Writable | any, stderr: stream.Writable | any, stdin: stream.Readable | any, tty: boolean): Promise<WebSocket>;
}
