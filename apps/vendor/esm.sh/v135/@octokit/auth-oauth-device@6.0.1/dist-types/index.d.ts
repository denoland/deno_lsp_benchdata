import type { GitHubAppAuthInterface, GitHubAppStrategyOptions, OAuthAppAuthInterface, OAuthAppStrategyOptions } from "./types.d.ts";
export type { OAuthAppStrategyOptions, OAuthAppAuthOptions, OAuthAppAuthentication, GitHubAppStrategyOptions, GitHubAppAuthOptions, GitHubAppAuthentication, GitHubAppAuthenticationWithExpiration, } from "./types.d.ts";
export declare function createOAuthDeviceAuth(options: OAuthAppStrategyOptions): OAuthAppAuthInterface;
export declare function createOAuthDeviceAuth(options: GitHubAppStrategyOptions): GitHubAppAuthInterface;
