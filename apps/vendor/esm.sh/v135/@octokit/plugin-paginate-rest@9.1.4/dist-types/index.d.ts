import type { Octokit } from "https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts";
import type { PaginateInterface } from "./types.d.ts";
export type { PaginateInterface, PaginatingEndpoints } from "./types.d.ts";
export { composePaginateRest } from "./compose-paginate.d.ts";
export { isPaginatingEndpoint, paginatingEndpoints, } from "./paginating-endpoints.d.ts";
/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */
export declare function paginateRest(octokit: Octokit): {
    paginate: PaginateInterface;
};
export declare namespace paginateRest {
    var VERSION: string;
}
