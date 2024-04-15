import { Octokit as OctokitCore } from "https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts";
export { RequestError } from "https://esm.sh/v135/@octokit/request-error@5.0.1/dist-types/index.d.ts";
export type { PageInfoForward, PageInfoBackward, } from "https://esm.sh/v135/@octokit/plugin-paginate-graphql@4.0.0/dist-types/index.d.ts";
export declare const Octokit: typeof OctokitCore & import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/types.d.ts").Constructor<{
    paginate: import("https://esm.sh/v135/@octokit/plugin-paginate-rest@9.1.4/dist-types/index.d.ts").PaginateInterface;
} & {
    graphql: import("https://esm.sh/v135/@octokit/graphql@7.0.2/dist-types/types~.d.ts").graphql & {
        paginate: (<ResponseType_1 extends object = any>(query: string, initialParameters?: Record<string, any> | undefined) => Promise<ResponseType_1>) & {
            iterator: <ResponseType_2 = any>(query: string, initialParameters?: Record<string, any> | undefined) => {
                [Symbol.asyncIterator]: () => {
                    next(): Promise<{
                        done: boolean;
                        value: ResponseType_2;
                    }>;
                };
            };
        };
    };
} & import("https://esm.sh/v135/@octokit/plugin-rest-endpoint-methods@10.1.5/dist-types/types.d.ts").Api & {
    retry: {
        retryRequest: (error: import("https://esm.sh/v135/@octokit/request-error@5.0.1/dist-types/index.d.ts").RequestError, retries: number, retryAfter: number) => import("https://esm.sh/v135/@octokit/request-error@5.0.1/dist-types/index.d.ts").RequestError;
    };
}>;
export type Octokit = InstanceType<typeof Octokit>;
