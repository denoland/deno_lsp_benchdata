import type { OAuthAppResult, GitHubAppResult } from "https://esm.sh/v135/@octokit/oauth-authorization-url@6.0.2/dist-types/index.d.ts";
import type { RequestInterface } from "https://esm.sh/v135/@octokit/types@11.1.0/dist-types/index.d.ts";
export type GetWebFlowAuthorizationUrlOAuthAppOptions = {
    clientType: "oauth-app";
    clientId: string;
    allowSignup?: boolean;
    login?: string;
    scopes?: string | string[];
    redirectUrl?: string;
    state?: string;
    request?: RequestInterface;
};
export type GetWebFlowAuthorizationUrlGitHubAppOptions = {
    clientType: "github-app";
    clientId: string;
    allowSignup?: boolean;
    login?: string;
    redirectUrl?: string;
    state?: string;
    request?: RequestInterface;
};
export type GetWebFlowAuthorizationUrlOAuthAppResult = OAuthAppResult;
export type GetWebFlowAuthorizationUrlGitHubAppResult = GitHubAppResult;
export declare function getWebFlowAuthorizationUrl(options: GetWebFlowAuthorizationUrlOAuthAppOptions): OAuthAppResult;
export declare function getWebFlowAuthorizationUrl(options: GetWebFlowAuthorizationUrlGitHubAppOptions): GitHubAppResult;
