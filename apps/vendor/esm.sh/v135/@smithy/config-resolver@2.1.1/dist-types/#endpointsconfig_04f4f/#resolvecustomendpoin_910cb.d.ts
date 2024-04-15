import { Endpoint, Provider, UrlParser } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { EndpointsInputConfig, EndpointsResolvedConfig } from "./resolveEndpointsConfig.d.ts";
/**
 * @public
 */
export interface CustomEndpointsInputConfig extends EndpointsInputConfig {
    /**
     * The fully qualified endpoint of the webservice.
     */
    endpoint: string | Endpoint | Provider<Endpoint>;
}
interface PreviouslyResolved {
    urlParser: UrlParser;
}
/**
 * @internal
 */
export interface CustomEndpointsResolvedConfig extends EndpointsResolvedConfig {
    /**
     * Whether the endpoint is specified by caller.
     * @internal
     */
    isCustomEndpoint: true;
}
/**
 * @internal
 */
export declare const resolveCustomEndpointsConfig: <T>(input: T & CustomEndpointsInputConfig & PreviouslyResolved) => T & CustomEndpointsResolvedConfig;
export {};
