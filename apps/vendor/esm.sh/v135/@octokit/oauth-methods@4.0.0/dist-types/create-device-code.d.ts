import type { OctokitResponse, RequestInterface } from "https://esm.sh/v135/@octokit/types@11.1.0/dist-types/index.d.ts";
export type CreateDeviceCodeOAuthAppOptions = {
    clientType: "oauth-app";
    clientId: string;
    scopes?: string[];
    request?: RequestInterface;
};
export type CreateDeviceCodeGitHubAppOptions = {
    clientType: "github-app";
    clientId: string;
    request?: RequestInterface;
};
export type CreateDeviceCodeDeviceTokenResponse = OctokitResponse<{
    device_code: string;
    user_code: string;
    verification_uri: string;
    expires_in: number;
    interval: number;
}>;
export declare function createDeviceCode(options: CreateDeviceCodeOAuthAppOptions | CreateDeviceCodeGitHubAppOptions): Promise<CreateDeviceCodeDeviceTokenResponse>;
