import * as OAuthMethods from "https://esm.sh/v135/@octokit/oauth-methods@4.0.0/dist-types/index.d.ts";
import type { ClientType, State } from "../types.d.ts";
export type ResetTokenOptions = {
    token: string;
};
export declare function resetTokenWithState(state: State, options: ResetTokenOptions): Promise<(OAuthMethods.ResetTokenOAuthAppResponse | OAuthMethods.ResetTokenGitHubAppResponse) & {
    authentication: {
        type: "token";
        tokenType: "oauth";
    };
}>;
export interface ResetTokenInterface<TClientType extends ClientType> {
    (options: ResetTokenOptions): TClientType extends "oauth-app" ? Promise<OAuthMethods.ResetTokenOAuthAppResponse & {
        authentication: {
            type: "token";
            tokenType: "oauth";
        };
    }> : Promise<OAuthMethods.ResetTokenGitHubAppResponse & {
        authentication: {
            type: "token";
            tokenType: "oauth";
        };
    }>;
}
