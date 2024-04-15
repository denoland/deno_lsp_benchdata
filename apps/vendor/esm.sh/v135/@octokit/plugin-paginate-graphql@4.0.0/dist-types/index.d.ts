import { Octokit } from "https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts";
export type { PageInfoForward, PageInfoBackward } from "./page-info.d.ts";
export declare function paginateGraphql(octokit: Octokit): {
    graphql: import("https://esm.sh/v135/@octokit/graphql@7.0.2/dist-types/types~.d.ts").graphql & {
        paginate: (<ResponseType_1 extends object = any>(query: string, initialParameters?: Record<string, any>) => Promise<ResponseType_1>) & {
            iterator: <ResponseType_2 = any>(query: string, initialParameters?: Record<string, any>) => {
                [Symbol.asyncIterator]: () => {
                    next(): Promise<{
                        done: boolean;
                        value: ResponseType_2;
                    }>;
                };
            };
        };
    };
};
