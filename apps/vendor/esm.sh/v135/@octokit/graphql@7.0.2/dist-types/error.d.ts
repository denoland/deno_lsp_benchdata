import type { ResponseHeaders } from "https://esm.sh/v135/@octokit/types@12.3.0/dist-types/index.d.ts";
import type { GraphQlEndpointOptions, GraphQlQueryResponse } from "./types.d.ts";
type ServerResponseData<T> = Required<GraphQlQueryResponse<T>>;
export declare class GraphqlResponseError<ResponseData> extends Error {
    readonly request: GraphQlEndpointOptions;
    readonly headers: ResponseHeaders;
    readonly response: ServerResponseData<ResponseData>;
    name: string;
    readonly errors: GraphQlQueryResponse<never>["errors"];
    readonly data: ResponseData;
    constructor(request: GraphQlEndpointOptions, headers: ResponseHeaders, response: ServerResponseData<ResponseData>);
}
export {};
