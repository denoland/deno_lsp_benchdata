import { ChecksumConstructor, HashConstructor, HttpRequest } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @private
 */
export declare const getPayloadHash: ({ headers, body }: HttpRequest, hashConstructor: ChecksumConstructor | HashConstructor) => Promise<string>;
