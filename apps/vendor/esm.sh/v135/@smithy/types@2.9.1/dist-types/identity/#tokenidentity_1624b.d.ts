import { Identity, IdentityProvider } from "../identity/identity.d.ts";
/**
 * @internal
 */
export interface TokenIdentity extends Identity {
    /**
     * The literal token string
     */
    readonly token: string;
}
/**
 * @internal
 */
export type TokenIdentityProvider = IdentityProvider<TokenIdentity>;
