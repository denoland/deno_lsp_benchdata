import * as OAuthMethods from "https://esm.sh/v135/@octokit/oauth-methods@4.0.0/dist-types/index.d.ts";
import type { ClientType, State } from "../types.d.ts";
export type CheckTokenOptions = {
    token: string;
};
export declare function checkTokenWithState(state: State, options: CheckTokenOptions): Promise<any>;
export interface CheckTokenInterface<TClientType extends ClientType> {
    (options: CheckTokenOptions): (TClientType extends "oauth-app" ? Promise<OAuthMethods.CheckTokenOAuthAppResponse> : Promise<OAuthMethods.CheckTokenGitHubAppResponse>) & {
        authentication: {
            type: "token";
            tokenType: "oauth";
        };
    };
}
