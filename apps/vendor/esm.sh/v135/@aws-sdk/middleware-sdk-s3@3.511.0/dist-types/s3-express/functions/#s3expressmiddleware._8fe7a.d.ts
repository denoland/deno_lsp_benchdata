import { AwsCredentialIdentity } from "https://esm.sh/v135/@aws-sdk/types@3.511.0/dist-types/index.d.ts";
import { BuildHandlerOptions, BuildMiddleware, Logger, MemoizedProvider, Pluggable } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { S3ExpressIdentity } from "../interfaces/S3ExpressIdentity.d.ts";
import { S3ExpressIdentityProvider } from "../interfaces/S3ExpressIdentityProvider.d.ts";
declare module "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts" {
    interface HandlerExecutionContext {
        /**
         * Reserved key, only when using S3.
         */
        s3ExpressIdentity?: S3ExpressIdentity;
    }
}
/**
 * @internal
 */
export interface S3ExpressResolvedConfig {
    logger?: Logger;
    s3ExpressIdentityProvider: S3ExpressIdentityProvider;
    credentials: MemoizedProvider<AwsCredentialIdentity>;
}
/**
 * @internal
 */
export declare const s3ExpressMiddleware: (options: S3ExpressResolvedConfig) => BuildMiddleware<any, any>;
/**
 * @internal
 */
export declare const s3ExpressMiddlewareOptions: BuildHandlerOptions;
/**
 * @internal
 */
export declare const getS3ExpressPlugin: (options: S3ExpressResolvedConfig) => Pluggable<any, any>;
