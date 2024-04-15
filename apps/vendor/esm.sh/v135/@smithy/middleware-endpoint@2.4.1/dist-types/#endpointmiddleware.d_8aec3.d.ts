import { EndpointParameters, SerializeMiddleware } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { EndpointResolvedConfig } from "./resolveEndpointConfig.d.ts";
import { EndpointParameterInstructions } from "./types.d.ts";
/**
 * @internal
 */
export declare const endpointMiddleware: <T extends EndpointParameters>({ config, instructions, }: {
    config: EndpointResolvedConfig<T>;
    instructions: EndpointParameterInstructions;
}) => SerializeMiddleware<any, any>;
