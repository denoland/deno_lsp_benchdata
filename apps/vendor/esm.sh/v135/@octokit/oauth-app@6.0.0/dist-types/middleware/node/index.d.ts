type IncomingMessage = any;
type ServerResponse = any;
import type { OAuthApp } from "../../index.d.ts";
import type { HandlerOptions } from "../types.d.ts";
import type { ClientType, Options } from "../../types.d.ts";
export declare function createNodeMiddleware(app: OAuthApp<Options<ClientType>>, options?: HandlerOptions): (request: IncomingMessage, response: ServerResponse, next?: Function) => Promise<boolean>;
export {};
