import type { OAuthAppStrategyOptions, GitHubAppStrategyOptions, OAuthAppAuthInterface, GitHubAppAuthInterface } from "./types.d.ts";
export type { OAuthAppStrategyOptionsWebFlow, GitHubAppStrategyOptionsWebFlow, OAuthAppStrategyOptionsDeviceFlow, GitHubAppStrategyOptionsDeviceFlow, OAuthAppStrategyOptionsExistingAuthentication, GitHubAppStrategyOptionsExistingAuthentication, GitHubAppStrategyOptionsExistingAuthenticationWithExpiration, OAuthAppStrategyOptions, GitHubAppStrategyOptions, OAuthAppAuthOptions, GitHubAppAuthOptions, OAuthAppAuthentication, GitHubAppAuthentication, GitHubAppAuthenticationWithExpiration, } from "./types.d.ts";
export { requiresBasicAuth } from "./requires-basic-auth.d.ts";
export declare function createOAuthUserAuth(options: OAuthAppStrategyOptions): OAuthAppAuthInterface;
export declare function createOAuthUserAuth(options: GitHubAppStrategyOptions): GitHubAppAuthInterface;
export declare namespace createOAuthUserAuth {
    var VERSION: string;
}
