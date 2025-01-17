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
import { V1Condition } from './v1Condition.d.ts';
import { V1LoadBalancerStatus } from './v1LoadBalancerStatus.d.ts';
/**
* ServiceStatus represents the current status of a service.
*/
export declare class V1ServiceStatus {
    /**
    * Current service state
    */
    'conditions'?: Array<V1Condition>;
    'loadBalancer'?: V1LoadBalancerStatus;
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
