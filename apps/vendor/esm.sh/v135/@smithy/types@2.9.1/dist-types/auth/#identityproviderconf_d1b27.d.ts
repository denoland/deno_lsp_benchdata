import { Identity, IdentityProvider } from "../identity/identity.d.ts";
import { HttpAuthSchemeId } from "./HttpAuthScheme.d.ts";
/**
 * Interface to get an IdentityProvider for a specified HttpAuthScheme
 * @internal
 */
export interface IdentityProviderConfig {
    /**
     * Get the IdentityProvider for a specified HttpAuthScheme.
     * @param schemeId schemeId of the HttpAuthScheme
     * @returns IdentityProvider or undefined if HttpAuthScheme is not found
     */
    getIdentityProvider(schemeId: HttpAuthSchemeId): IdentityProvider<Identity> | undefined;
}
