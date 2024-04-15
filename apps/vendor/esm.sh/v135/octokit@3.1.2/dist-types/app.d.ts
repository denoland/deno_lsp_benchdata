import { App as DefaultApp } from "https://esm.sh/v135/@octokit/app@14.0.2/dist-types/index.d.ts";
import { OAuthApp as DefaultOAuthApp } from "https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/index.d.ts";
export declare const App: (new (...args: any[]) => {
    octokit: import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit & {
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
    };
    webhooks: import("https://esm.sh/v135/@octokit/webhooks@12.0.8/dist-types/index.d.ts").Webhooks<{
        octokit: import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit & {
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
        };
    }>;
    oauth: DefaultOAuthApp<{
        clientType: "github-app";
        Octokit: typeof import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit & import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/types.d.ts").Constructor<{
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
    }>;
    getInstallationOctokit: import("https://esm.sh/v135/@octokit/app@14.0.2/dist-types/types.d.ts").GetInstallationOctokitInterface<import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit & {
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
    eachInstallation: import("https://esm.sh/v135/@octokit/app@14.0.2/dist-types/types.d.ts").EachInstallationInterface<import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit & {
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
    eachRepository: import("https://esm.sh/v135/@octokit/app@14.0.2/dist-types/types.d.ts").EachRepositoryInterface<import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit & {
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
    log: {
        [key: string]: unknown;
        debug: (message: string, additionalInfo?: object | undefined) => void;
        info: (message: string, additionalInfo?: object | undefined) => void;
        warn: (message: string, additionalInfo?: object | undefined) => void;
        error: (message: string, additionalInfo?: object | undefined) => void;
    };
}) & typeof DefaultApp;
export type App = InstanceType<typeof App>;
export declare const OAuthApp: (new (...args: any[]) => {
    type: "oauth-app";
    on: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/types.d.ts").AddEventHandler<{
        Octokit: typeof import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit & import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/types.d.ts").Constructor<{
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
    }>;
    octokit: import("https://esm.sh/v135/@octokit/core@5.0.2/dist-types/index.d.ts").Octokit & {
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
    };
    getUserOctokit: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/get-user-octokit.d.ts").GetUserOctokitWithStateInterface<"oauth-app">;
    getWebFlowAuthorizationUrl: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/get-web-flow-authorization-url.d.ts").GetWebFlowAuthorizationUrlInterface<"oauth-app">;
    createToken: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/create-token.d.ts").CreateTokenInterface<"oauth-app">;
    checkToken: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/check-token.d.ts").CheckTokenInterface<"oauth-app">;
    resetToken: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/reset-token.d.ts").ResetTokenInterface<"oauth-app">;
    refreshToken: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/refresh-token.d.ts").RefreshTokenInterface;
    scopeToken: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/scope-token.d.ts").ScopeTokenInterface;
    deleteToken: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/delete-token.d.ts").DeleteTokenInterface;
    deleteAuthorization: import("https://esm.sh/v135/@octokit/oauth-app@6.0.0/dist-types/methods/delete-authorization.d.ts").DeleteAuthorizationInterface;
}) & typeof DefaultOAuthApp;
export type OAuthApp = InstanceType<typeof OAuthApp>;
export { createNodeMiddleware } from "https://esm.sh/v135/@octokit/app@14.0.2/dist-types/index.d.ts";
