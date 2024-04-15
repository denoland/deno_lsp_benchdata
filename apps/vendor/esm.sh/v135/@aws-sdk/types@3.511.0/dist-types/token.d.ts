import { TokenIdentity } from "./identity/index.d.ts";
import { Provider } from "./util.d.ts";
/**
 * @public
 *
 * An object representing temporary or permanent AWS token.
 *
 * @deprecated Use {@link TokenIdentity}
 */
export interface Token extends TokenIdentity {
}
/**
 * @public
 *
 * @deprecated Use {@link TokenIdentityProvider}
 */
export type TokenProvider = Provider<Token>;
