import { EndpointVariantTag } from "./EndpointVariantTag.d.ts";
/**
 * @internal
 *
 * Provides hostname information for specific host label.
 */
export type EndpointVariant = {
    hostname: string;
    tags: EndpointVariantTag[];
};
