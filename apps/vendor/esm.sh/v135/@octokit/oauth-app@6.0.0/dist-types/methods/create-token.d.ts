import * as OAuthAppAuth from "https://esm.sh/v135/@octokit/auth-oauth-app@7.0.1/dist-types/index.d.ts";
import type { ClientType, State } from "../types.d.ts";
export type CreateTokenWebFlowOptions = Omit<OAuthAppAuth.WebFlowAuthOptions, "type">;
export type CreateTokenOAuthAppDeviceFlowOptions = Omit<OAuthAppAuth.OAuthAppDeviceFlowAuthOptions, "type">;
export type CreateTokenGitHubAppDeviceFlowOptions = Omit<OAuthAppAuth.GitHubAppDeviceFlowAuthOptions, "type">;
export declare function createTokenWithState(state: State, options: CreateTokenWebFlowOptions | CreateTokenOAuthAppDeviceFlowOptions | CreateTokenGitHubAppDeviceFlowOptions): Promise<{
    authentication: OAuthAppAuth.OAuthAppUserAuthentication | OAuthAppAuth.GitHubAppUserAuthentication | OAuthAppAuth.GitHubAppUserAuthenticationWithExpiration;
}>;
export interface CreateTokenInterface<TClientType extends ClientType> {
    (options: CreateTokenWebFlowOptions): TClientType extends "oauth-app" ? Promise<{
        authentication: OAuthAppAuth.OAuthAppUserAuthentication;
    }> : Promise<{
        authentication: OAuthAppAuth.GitHubAppUserAuthentication;
    } | {
        authentication: OAuthAppAuth.GitHubAppUserAuthenticationWithExpiration;
    }>;
    (options: TClientType extends "oauth-app" ? CreateTokenOAuthAppDeviceFlowOptions : CreateTokenGitHubAppDeviceFlowOptions): TClientType extends "oauth-app" ? Promise<{
        authentication: OAuthAppAuth.OAuthAppUserAuthentication;
    }> : Promise<{
        authentication: OAuthAppAuth.GitHubAppUserAuthentication;
    } | {
        authentication: OAuthAppAuth.GitHubAppUserAuthenticationWithExpiration;
    }>;
}
