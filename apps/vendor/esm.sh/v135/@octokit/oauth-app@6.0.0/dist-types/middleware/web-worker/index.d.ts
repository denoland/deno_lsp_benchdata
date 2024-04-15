import type { OAuthApp } from "../../index.d.ts";
import type { HandlerOptions } from "../types.d.ts";
import type { ClientType, Options } from "../../types.d.ts";
export declare function createWebWorkerHandler<T extends Options<ClientType>>(app: OAuthApp<T>, options?: HandlerOptions): (request: Request) => Promise<Response | undefined>;
