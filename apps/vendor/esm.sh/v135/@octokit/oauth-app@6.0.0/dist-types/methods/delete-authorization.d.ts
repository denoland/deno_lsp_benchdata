import * as OAuthMethods from "https://esm.sh/v135/@octokit/oauth-methods@4.0.0/dist-types/index.d.ts";
import type { State } from "../types.d.ts";
export type DeleteAuthorizationOptions = {
    token: string;
};
export declare function deleteAuthorizationWithState(state: State, options: DeleteAuthorizationOptions): Promise<OAuthMethods.DeleteAuthorizationResponse>;
export interface DeleteAuthorizationInterface {
    (options: DeleteAuthorizationOptions): Promise<OAuthMethods.DeleteAuthorizationResponse>;
}
