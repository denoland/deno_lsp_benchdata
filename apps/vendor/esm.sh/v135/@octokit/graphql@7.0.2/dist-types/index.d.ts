import { request } from "https://esm.sh/v135/@octokit/request@8.1.6/dist-types/index.d.ts";
export declare const graphql: import("./types.d.ts").graphql;
export type { GraphQlQueryResponseData } from "./types.d.ts";
export { GraphqlResponseError } from "./error.d.ts";
export declare function withCustomRequest(customRequest: typeof request): import("./types.d.ts").graphql;
