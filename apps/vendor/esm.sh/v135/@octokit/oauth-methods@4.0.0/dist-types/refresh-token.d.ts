import type { OctokitResponse, RequestInterface } from "https://esm.sh/v135/@octokit/types@11.1.0/dist-types/index.d.ts";
import type { GitHubAppAuthenticationWithRefreshToken, GitHubAppCreateTokenWithExpirationResponseData } from "./types.d.ts";
export type RefreshTokenOptions = {
    clientType: "github-app";
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    request?: RequestInterface;
};
export type RefreshTokenResponse = OctokitResponse<GitHubAppCreateTokenWithExpirationResponseData> & {
    authentication: GitHubAppAuthenticationWithRefreshToken;
};
export declare function refreshToken(options: RefreshTokenOptions): Promise<RefreshTokenResponse>;
