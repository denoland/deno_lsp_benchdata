import type { OAuthAppStrategyOptionsWebFlow, OAuthAppStrategyOptionsDeviceFlow, OAuthAppStrategyOptionsExistingAuthentication, GitHubAppStrategyOptionsWebFlow, GitHubAppStrategyOptionsDeviceFlow, GitHubAppStrategyOptionsExistingAuthentication, GitHubAppStrategyOptionsExistingAuthenticationWithExpiration } from "https://esm.sh/v135/@octokit/auth-oauth-user@4.0.1/dist-types/index.d.ts";
import type { State, OctokitInstance, ClientType } from "../types.d.ts";
type StateOptions = "clientType" | "clientId" | "clientSecret" | "request";
export type GetUserOctokitOAuthAppOptions = Omit<OAuthAppStrategyOptionsWebFlow, StateOptions> | Omit<OAuthAppStrategyOptionsDeviceFlow, StateOptions> | Omit<OAuthAppStrategyOptionsExistingAuthentication, StateOptions>;
export type GetUserOctokitGitHubAppOptions = Omit<GitHubAppStrategyOptionsWebFlow, StateOptions> | Omit<GitHubAppStrategyOptionsDeviceFlow, StateOptions> | Omit<GitHubAppStrategyOptionsExistingAuthentication, StateOptions> | Omit<GitHubAppStrategyOptionsExistingAuthenticationWithExpiration, StateOptions>;
export declare function getUserOctokitWithState(state: State, options: GetUserOctokitOAuthAppOptions | GetUserOctokitGitHubAppOptions): Promise<import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit>;
export interface GetUserOctokitWithStateInterface<TClientType extends ClientType> {
    (options: TClientType extends "oauth-app" ? GetUserOctokitOAuthAppOptions : GetUserOctokitGitHubAppOptions): Promise<OctokitInstance>;
}
export {};
