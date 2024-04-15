import { FinalizeRequestMiddleware, Pluggable, RelativeMiddlewareOptions } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { AwsAuthResolvedConfig } from "./awsAuthConfiguration.d.ts";
export declare const awsAuthMiddleware: <Input extends object, Output extends object>(options: AwsAuthResolvedConfig) => FinalizeRequestMiddleware<Input, Output>;
export declare const awsAuthMiddlewareOptions: RelativeMiddlewareOptions;
export declare const getAwsAuthPlugin: (options: AwsAuthResolvedConfig) => Pluggable<any, any>;
export declare const getSigV4AuthPlugin: (options: AwsAuthResolvedConfig) => Pluggable<any, any>;
