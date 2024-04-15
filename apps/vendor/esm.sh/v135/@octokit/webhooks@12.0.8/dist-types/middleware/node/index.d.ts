import type { Webhooks } from "../../index.d.ts";
import type { MiddlewareOptions } from "./types.d.ts";
export declare function createNodeMiddleware(webhooks: Webhooks, { path, log, }?: MiddlewareOptions): (request: any, response: any, next?: Function | undefined) => Promise<boolean>;
