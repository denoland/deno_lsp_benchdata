import { AwsRegionExtensionConfiguration } from "https://esm.sh/v135/@aws-sdk/types@3.511.0/dist-types/index.d.ts";
import { HttpHandlerExtensionConfiguration } from "https://esm.sh/v135/@smithy/protocol-http@3.1.1/dist-types/index.d.ts";
import { DefaultExtensionConfiguration } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @internal
 */
export interface S3ExtensionConfiguration extends HttpHandlerExtensionConfiguration, DefaultExtensionConfiguration, AwsRegionExtensionConfiguration {
}
