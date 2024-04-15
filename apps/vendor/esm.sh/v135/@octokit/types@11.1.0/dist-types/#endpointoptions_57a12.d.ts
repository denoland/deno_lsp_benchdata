import type { RequestMethod } from "./RequestMethod.d.ts";
import type { Url } from "./Url.d.ts";
import type { RequestParameters } from "./RequestParameters.d.ts";
export type EndpointOptions = RequestParameters & {
    method: RequestMethod;
    url: Url;
};
