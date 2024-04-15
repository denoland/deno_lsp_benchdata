/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
/// <reference path="https://esm.sh/v135/@types/ws@8.5.10/index.d.ts" />
import WebSocket = require('https://esm.sh/v135/isomorphic-ws@5.0.0/index.d.ts');
import stream = require('https://esm.sh/v135/@types/node@18.16.19/stream.d.ts');
import { V1Status } from './api.d.ts';
import { KubeConfig } from './config.d.ts';
import { WebSocketInterface } from './web-socket-handler.d.ts';
export declare class Exec {
    'handler': WebSocketInterface;
    private terminalSizeQueue?;
    constructor(config: KubeConfig, wsInterface?: WebSocketInterface);
    /**
     * @param {string}  namespace - The namespace of the pod to exec the command inside.
     * @param {string} podName - The name of the pod to exec the command inside.
     * @param {string} containerName - The name of the container in the pod to exec the command inside.
     * @param {(string|string[])} command - The command or command and arguments to execute.
     * @param {stream.Writable} stdout - The stream to write stdout data from the command.
     * @param {stream.Writable} stderr - The stream to write stderr data from the command.
     * @param {stream.Readable} stdin - The stream to write stdin data into the command.
     * @param {boolean} tty - Should the command execute in a TTY enabled session.
     * @param {(V1Status) => void} statusCallback -
     *       A callback to received the status (e.g. exit code) from the command, optional.
     * @return {Promise<WebSocket>} A promise that will return the web socket created for this command.
     */
    exec(namespace: string, podName: string, containerName: string, command: string | string[], stdout: stream.Writable | null, stderr: stream.Writable | null, stdin: stream.Readable | null, tty: boolean, statusCallback?: (status: V1Status) => void): Promise<WebSocket>;
}
