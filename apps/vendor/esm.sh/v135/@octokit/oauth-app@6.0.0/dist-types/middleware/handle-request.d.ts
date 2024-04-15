import { OAuthApp } from "../index.d.ts";
import type { HandlerOptions, OctokitRequest, OctokitResponse } from "./types.d.ts";
import type { ClientType, Options } from "../types.d.ts";
export declare function handleRequest(app: OAuthApp<Options<ClientType>>, { pathPrefix }: HandlerOptions, request: OctokitRequest): Promise<OctokitResponse | undefined>;
