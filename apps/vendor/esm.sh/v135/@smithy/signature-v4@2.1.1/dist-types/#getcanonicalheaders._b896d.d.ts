import { HeaderBag, HttpRequest } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @private
 */
export declare const getCanonicalHeaders: ({ headers }: HttpRequest, unsignableHeaders?: Set<string>, signableHeaders?: Set<string>) => HeaderBag;
