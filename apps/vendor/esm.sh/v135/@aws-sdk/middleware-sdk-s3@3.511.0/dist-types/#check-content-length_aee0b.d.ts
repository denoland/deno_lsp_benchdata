import { FinalizeRequestHandlerOptions, FinalizeRequestMiddleware, Pluggable } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @internal
 *
 * Log a warning if the input to PutObject is detected to be a Stream of unknown ContentLength and
 * recommend the usage of the @aws-sdk/lib-storage Upload class.
 */
export declare function checkContentLengthHeader(): FinalizeRequestMiddleware<any, any>;
/**
 * @internal
 */
export declare const checkContentLengthHeaderMiddlewareOptions: FinalizeRequestHandlerOptions;
/**
 * @internal
 */
export declare const getCheckContentLengthHeaderPlugin: (unused: any) => Pluggable<any, any>;
