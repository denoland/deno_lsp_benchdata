import { FinalizeHandler, MetadataBearer, Pluggable, RelativeMiddlewareOptions } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
export declare const omitRetryHeadersMiddleware: () => <Output extends MetadataBearer = MetadataBearer>(next: FinalizeHandler<any, Output>) => FinalizeHandler<any, Output>;
export declare const omitRetryHeadersMiddlewareOptions: RelativeMiddlewareOptions;
export declare const getOmitRetryHeadersPlugin: (options: unknown) => Pluggable<any, any>;
