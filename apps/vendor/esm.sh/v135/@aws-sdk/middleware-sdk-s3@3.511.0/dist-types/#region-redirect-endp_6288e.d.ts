import { RelativeMiddlewareOptions, SerializeMiddleware } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { PreviouslyResolved } from "./region-redirect-middleware.d.ts";
/**
 * @internal
 */
export declare const regionRedirectEndpointMiddleware: (config: PreviouslyResolved) => SerializeMiddleware<any, any>;
/**
 * @internal
 */
export declare const regionRedirectEndpointMiddlewareOptions: RelativeMiddlewareOptions;
