import type { RequestHeaders } from "./RequestHeaders.d.ts";
import type { RequestMethod } from "./RequestMethod.d.ts";
import type { RequestParameters } from "./RequestParameters.d.ts";
import type { Url } from "./Url.d.ts";
/**
 * The `.endpoint()` method is guaranteed to set all keys defined by RequestParameters
 * as well as the method property.
 */
export type EndpointDefaults = RequestParameters & {
    baseUrl: Url;
    method: RequestMethod;
    url?: Url;
    headers: RequestHeaders & {
        accept: string;
        "user-agent": string;
    };
    mediaType: {
        format: string;
        previews?: string[];
    };
};
