import * as OAuthMethods from "https://esm.sh/v135/@octokit/oauth-methods@4.0.0/dist-types/index.d.ts";
import type { ClientType, State } from "../types.d.ts";
type StateOptions = "clientType" | "clientId" | "clientSecret" | "request";
export type GetWebFlowAuthorizationUrlOAuthAppOptions = Omit<OAuthMethods.GetWebFlowAuthorizationUrlOAuthAppOptions, StateOptions>;
export type GetWebFlowAuthorizationUrlGitHubAppOptions = Omit<OAuthMethods.GetWebFlowAuthorizationUrlGitHubAppOptions, StateOptions>;
export declare function getWebFlowAuthorizationUrlWithState(state: State, options: any): any;
export interface GetWebFlowAuthorizationUrlInterface<TClientType extends ClientType> {
    (options: TClientType extends "oauth-app" ? GetWebFlowAuthorizationUrlOAuthAppOptions : GetWebFlowAuthorizationUrlGitHubAppOptions): TClientType extends "oauth-app" ? OAuthMethods.GetWebFlowAuthorizationUrlOAuthAppResult : OAuthMethods.GetWebFlowAuthorizationUrlGitHubAppResult;
}
export {};
