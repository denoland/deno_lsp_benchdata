import { InitializeHandlerOptions, InitializeMiddleware, Pluggable, Provider } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @internal
 */
export interface PreviouslyResolved {
    region: Provider<string>;
    followRegionRedirects: boolean;
}
/**
 * @internal
 */
export declare function regionRedirectMiddleware(clientConfig: PreviouslyResolved): InitializeMiddleware<any, any>;
/**
 * @internal
 */
export declare const regionRedirectMiddlewareOptions: InitializeHandlerOptions;
/**
 * @internal
 */
export declare const getRegionRedirectMiddlewarePlugin: (clientConfig: PreviouslyResolved) => Pluggable<any, any>;
