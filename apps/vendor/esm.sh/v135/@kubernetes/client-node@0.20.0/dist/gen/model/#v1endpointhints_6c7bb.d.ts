/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.28
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { V1ForZone } from './v1ForZone.d.ts';
/**
* EndpointHints provides hints describing how an endpoint should be consumed.
*/
export declare class V1EndpointHints {
    /**
    * forZones indicates the zone(s) this endpoint should be consumed by to enable topology aware routing.
    */
    'forZones'?: Array<V1ForZone>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}