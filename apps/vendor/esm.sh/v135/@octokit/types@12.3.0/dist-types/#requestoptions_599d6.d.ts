import type { RequestHeaders } from "./RequestHeaders.d.ts";
import type { RequestMethod } from "./RequestMethod.d.ts";
import type { RequestRequestOptions } from "./RequestRequestOptions.d.ts";
import type { Url } from "./Url.d.ts";
/**
 * Generic request options as they are returned by the `endpoint()` method
 */
export type RequestOptions = {
    method: RequestMethod;
    url: Url;
    headers: RequestHeaders;
    body?: any;
    request?: RequestRequestOptions;
};
