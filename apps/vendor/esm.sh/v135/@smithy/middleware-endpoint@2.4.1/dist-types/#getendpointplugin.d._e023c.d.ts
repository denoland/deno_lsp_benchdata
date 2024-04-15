import { EndpointParameters, Pluggable, RelativeMiddlewareOptions, SerializeHandlerOptions } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { EndpointResolvedConfig } from "./resolveEndpointConfig.d.ts";
import { EndpointParameterInstructions } from "./types.d.ts";
/**
 * @internal
 */
export declare const endpointMiddlewareOptions: SerializeHandlerOptions & RelativeMiddlewareOptions;
/**
 * @internal
 */
export declare const getEndpointPlugin: <T extends EndpointParameters>(config: EndpointResolvedConfig<T>, instructions: EndpointParameterInstructions) => Pluggable<any, any>;
