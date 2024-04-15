import * as OAuthMethods from "https://esm.sh/v135/@octokit/oauth-methods@4.0.0/dist-types/index.d.ts";
import type { State } from "../types.d.ts";
type StateOptions = "clientType" | "clientId" | "clientSecret" | "request";
export type ScopeTokenOptions = Omit<OAuthMethods.ScopeTokenOptions, StateOptions>;
export declare function scopeTokenWithState(state: State, options: ScopeTokenOptions): Promise<OAuthMethods.ScopeTokenResponse & {
    authentication: {
        type: "token";
        tokenType: "oauth";
    };
}>;
export interface ScopeTokenInterface {
    (options: ScopeTokenOptions): Promise<OAuthMethods.ScopeTokenResponse & {
        authentication: {
            type: "token";
            tokenType: "oauth";
        };
    }>;
}
export {};
