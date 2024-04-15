import { HttpRequest, QueryParameterBag } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @private
 */
export declare const moveHeadersToQuery: (request: HttpRequest, options?: {
    unhoistableHeaders?: Set<string>;
}) => HttpRequest & {
    query: QueryParameterBag;
};
