import { SerdeContext } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { Uint8ArrayBlobAdapter } from "https://esm.sh/v135/@smithy/util-stream@2.1.1/dist-types/index.d.ts";
/**
 * @internal
 *
 * Collect low-level response body stream to Uint8Array.
 */
export declare const collectBody: (streamBody: any, context: {
    streamCollector: SerdeContext["streamCollector"];
}) => Promise<Uint8ArrayBlobAdapter>;
