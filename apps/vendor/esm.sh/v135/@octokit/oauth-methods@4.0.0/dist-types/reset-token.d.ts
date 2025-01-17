import type { Endpoints, RequestInterface } from "https://esm.sh/v135/@octokit/types@11.1.0/dist-types/index.d.ts";
import type { OAuthAppAuthentication, GitHubAppAuthenticationWithExpirationEnabled, GitHubAppAuthenticationWithExpirationDisabled } from "./types.d.ts";
export type ResetTokenOAuthAppOptions = {
    clientType: "oauth-app";
    clientId: string;
    clientSecret: string;
    token: string;
    request?: RequestInterface;
};
export type ResetTokenGitHubAppOptions = {
    clientType: "github-app";
    clientId: string;
    clientSecret: string;
    token: string;
    request?: RequestInterface;
};
export type ResetTokenOAuthAppResponse = Endpoints["PATCH /applications/{client_id}/token"]["response"] & {
    authentication: OAuthAppAuthentication;
};
export type ResetTokenGitHubAppResponse = Endpoints["PATCH /applications/{client_id}/token"]["response"] & {
    authentication: GitHubAppAuthenticationWithExpirationEnabled | GitHubAppAuthenticationWithExpirationDisabled;
};
export declare function resetToken(options: ResetTokenOAuthAppOptions): Promise<ResetTokenOAuthAppResponse>;
export declare function resetToken(options: ResetTokenGitHubAppOptions): Promise<ResetTokenGitHubAppResponse>;
