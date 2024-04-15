import { AbsoluteLocation, FinalizeHandler, FinalizeRequestHandlerOptions, HandlerExecutionContext, MetadataBearer, Pluggable } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { RetryResolvedConfig } from "./configurations.d.ts";
export declare const retryMiddleware: (options: RetryResolvedConfig) => <Output extends MetadataBearer = MetadataBearer>(next: FinalizeHandler<any, Output>, context: HandlerExecutionContext) => FinalizeHandler<any, Output>;
export declare const retryMiddlewareOptions: FinalizeRequestHandlerOptions & AbsoluteLocation;
export declare const getRetryPlugin: (options: RetryResolvedConfig) => Pluggable<any, any>;
export declare const getRetryAfterHint: (response: unknown) => Date | undefined;
