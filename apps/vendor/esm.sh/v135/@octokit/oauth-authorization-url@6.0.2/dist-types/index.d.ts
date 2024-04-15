import type { OAuthAppOptions, GitHubAppOptions, OAuthAppResult, GitHubAppResult } from "./types.d.ts";
export type { ClientType, OAuthAppOptions, GitHubAppOptions, OAuthAppResult, GitHubAppResult, } from "./types.d.ts";
export declare function oauthAuthorizationUrl(options: OAuthAppOptions): OAuthAppResult;
export declare function oauthAuthorizationUrl(options: GitHubAppOptions): GitHubAppResult;
