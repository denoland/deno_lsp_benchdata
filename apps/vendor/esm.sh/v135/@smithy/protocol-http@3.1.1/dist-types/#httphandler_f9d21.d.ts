import { HttpHandlerOptions, RequestHandler } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { HttpRequest } from "./httpRequest.d.ts";
import { HttpResponse } from "./httpResponse.d.ts";
/**
 * @internal
 */
export type HttpHandler<HttpHandlerConfig extends object = {}> = RequestHandler<HttpRequest, HttpResponse, HttpHandlerOptions> & {
    /**
     * @internal
     * @param key
     * @param value
     */
    updateHttpClientConfig(key: keyof HttpHandlerConfig, value: HttpHandlerConfig[typeof key]): void;
    /**
     * @internal
     */
    httpHandlerConfigs(): HttpHandlerConfig;
};
