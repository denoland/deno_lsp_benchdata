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
import { V2CrossVersionObjectReference } from './v2CrossVersionObjectReference.d.ts';
import { V2MetricIdentifier } from './v2MetricIdentifier.d.ts';
import { V2MetricValueStatus } from './v2MetricValueStatus.d.ts';
/**
* ObjectMetricStatus indicates the current value of a metric describing a kubernetes object (for example, hits-per-second on an Ingress object).
*/
export declare class V2ObjectMetricStatus {
    'current': V2MetricValueStatus;
    'describedObject': V2CrossVersionObjectReference;
    'metric': V2MetricIdentifier;
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
