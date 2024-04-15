import type { RequestOptions, ResponseHeaders, OctokitResponse } from "https://esm.sh/v135/@octokit/types@12.3.0/dist-types/index.d.ts";
export type RequestErrorOptions = {
    /** @deprecated set `response` instead */
    headers?: ResponseHeaders;
    request: RequestOptions;
} | {
    response: OctokitResponse<unknown>;
    request: RequestOptions;
};
