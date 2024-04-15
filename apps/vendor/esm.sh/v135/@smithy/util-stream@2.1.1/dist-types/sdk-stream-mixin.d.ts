import { SdkStream } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { Readable } from "https://esm.sh/v135/@types/node@18.16.19/stream.d.ts";
/**
 * The function that mixes in the utility functions to help consuming runtime-specific payload stream.
 *
 * @internal
 */
export declare const sdkStreamMixin: (stream: unknown) => SdkStream<Readable>;
