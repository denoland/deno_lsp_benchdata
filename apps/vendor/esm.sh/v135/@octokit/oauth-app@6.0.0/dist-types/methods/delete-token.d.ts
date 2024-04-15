import * as OAuthMethods from "https://esm.sh/v135/@octokit/oauth-methods@4.0.0/dist-types/index.d.ts";
import type { State } from "../types.d.ts";
export type DeleteTokenOptions = {
    token: string;
};
export declare function deleteTokenWithState(state: State, options: DeleteTokenOptions): Promise<OAuthMethods.DeleteTokenResponse>;
export interface DeleteTokenInterface {
    (options: DeleteTokenOptions): Promise<OAuthMethods.DeleteTokenResponse>;
}
