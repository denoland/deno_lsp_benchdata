/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import { ObjectCache } from './cache.d.ts';
import { KubeConfig } from './config.d.ts';
import { KubernetesListObject, KubernetesObject } from './types.d.ts';
import http = require('https://esm.sh/v135/@types/node@18.16.19/http.d.ts');
export type ObjectCallback<T extends KubernetesObject> = (obj: T) => void;
export type ErrorCallback = (err?: any) => void;
export type ListCallback<T extends KubernetesObject> = (list: T[], ResourceVersion: string) => void;
export type ListPromise<T extends KubernetesObject> = () => Promise<{
    response: http.IncomingMessage;
    body: KubernetesListObject<T>;
}>;
export declare const ADD = "add";
export type ADD = typeof ADD;
export declare const UPDATE = "update";
export type UPDATE = typeof UPDATE;
export declare const CHANGE = "change";
export type CHANGE = typeof CHANGE;
export declare const DELETE = "delete";
export type DELETE = typeof DELETE;
export declare const CONNECT = "connect";
export type CONNECT = typeof CONNECT;
export declare const ERROR = "error";
export type ERROR = typeof ERROR;
export interface Informer<T extends KubernetesObject> {
    on(verb: ADD | UPDATE | DELETE | CHANGE, cb: ObjectCallback<T>): void;
    on(verb: ERROR | CONNECT, cb: ErrorCallback): void;
    off(verb: ADD | UPDATE | DELETE | CHANGE, cb: ObjectCallback<T>): void;
    off(verb: ERROR | CONNECT, cb: ErrorCallback): void;
    start(): Promise<void>;
    stop(): Promise<void>;
}
export declare function makeInformer<T extends KubernetesObject>(kubeconfig: KubeConfig, path: string, listPromiseFn: ListPromise<T>, labelSelector?: string, fieldSelector?: string): Informer<T> & ObjectCache<T>;
