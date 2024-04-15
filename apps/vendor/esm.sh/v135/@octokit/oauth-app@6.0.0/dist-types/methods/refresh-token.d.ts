import * as OAuthMethods from "https://esm.sh/v135/@octokit/oauth-methods@4.0.0/dist-types/index.d.ts";
import type { State } from "../types.d.ts";
export type RefreshTokenOptions = {
    refreshToken: string;
};
export declare function refreshTokenWithState(state: State, options: RefreshTokenOptions): Promise<OAuthMethods.RefreshTokenResponse & {
    authentication: {
        type: "token";
        tokenType: "oauth";
    };
}>;
export interface RefreshTokenInterface {
    (options: RefreshTokenOptions): Promise<OAuthMethods.RefreshTokenResponse & {
        authentication: {
            type: "token";
            tokenType: "oauth";
        };
    }>;
}
