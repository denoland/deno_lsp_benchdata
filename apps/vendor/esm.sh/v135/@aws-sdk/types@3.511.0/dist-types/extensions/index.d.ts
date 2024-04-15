import { Provider } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @internal
 */
export interface AwsRegionExtensionConfiguration {
    setRegion(region: Provider<string>): void;
    region(): Provider<string>;
}
