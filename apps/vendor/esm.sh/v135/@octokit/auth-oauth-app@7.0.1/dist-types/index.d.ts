import type { OAuthAppStrategyOptions, GitHubAppStrategyOptions, OAuthAppAuthInterface, GitHubAuthInterface } from "./types.d.ts";
export type { OAuthAppStrategyOptions, GitHubAppStrategyOptions, AppAuthOptions, WebFlowAuthOptions, OAuthAppDeviceFlowAuthOptions, GitHubAppDeviceFlowAuthOptions, OAuthAppAuthInterface, GitHubAuthInterface, AppAuthentication, OAuthAppUserAuthentication, GitHubAppUserAuthentication, GitHubAppUserAuthenticationWithExpiration, FactoryGitHubWebFlow, FactoryGitHubDeviceFlow, } from "./types.d.ts";
export { createOAuthUserAuth } from "https://esm.sh/v135/@octokit/auth-oauth-user@4.0.1/dist-types/index.d.ts";
export declare function createOAuthAppAuth(options: OAuthAppStrategyOptions): OAuthAppAuthInterface;
export declare function createOAuthAppAuth(options: GitHubAppStrategyOptions): GitHubAuthInterface;
