import type { Route, RequestParameters } from "https://esm.sh/v135/@octokit/types@12.3.0/dist-types/index.d.ts";
import type { RestEndpointMethods } from "./generated/method-types.d.ts";
export type Api = {
    rest: RestEndpointMethods;
};
export type EndpointDecorations = {
    mapToData?: string;
    deprecated?: string;
    renamed?: [string, string];
    renamedParameters?: {
        [name: string]: string;
    };
};
export type EndpointsDefaultsAndDecorations = {
    [scope: string]: {
        [methodName: string]: [Route, RequestParameters?, EndpointDecorations?];
    };
};
