import { EndpointV2 } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { EndpointResolverOptions, RuleSetObject } from "./types/index.d.ts";
/**
 * Resolves an endpoint URL by processing the endpoints ruleset and options.
 */
export declare const resolveEndpoint: (ruleSetObject: RuleSetObject, options: EndpointResolverOptions) => EndpointV2;
