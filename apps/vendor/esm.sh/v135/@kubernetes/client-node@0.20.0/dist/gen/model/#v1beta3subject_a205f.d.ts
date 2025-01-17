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
import { V1beta3GroupSubject } from './v1beta3GroupSubject.d.ts';
import { V1beta3ServiceAccountSubject } from './v1beta3ServiceAccountSubject.d.ts';
import { V1beta3UserSubject } from './v1beta3UserSubject.d.ts';
/**
* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
*/
export declare class V1beta3Subject {
    'group'?: V1beta3GroupSubject;
    /**
    * `kind` indicates which one of the other fields is non-empty. Required
    */
    'kind': string;
    'serviceAccount'?: V1beta3ServiceAccountSubject;
    'user'?: V1beta3UserSubject;
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
