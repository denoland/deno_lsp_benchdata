/**
 * <p></p>
 *
 * @packageDocumentation
 */
export * from "./S3Client.d.ts";
export * from "./S3.d.ts";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters.d.ts";
export { RuntimeExtension } from "./runtimeExtensions.d.ts";
export { S3ExtensionConfiguration } from "./extensionConfiguration.d.ts";
export * from "./commands/index.d.ts";
export * from "./pagination/index.d.ts";
export * from "./waiters/index.d.ts";
export * from "./models/index.d.ts";
import "https://esm.sh/v135/@aws-sdk/util-endpoints@3.511.0/dist-types/index.d.ts";
export { S3ServiceException } from "./models/S3ServiceException.d.ts";
