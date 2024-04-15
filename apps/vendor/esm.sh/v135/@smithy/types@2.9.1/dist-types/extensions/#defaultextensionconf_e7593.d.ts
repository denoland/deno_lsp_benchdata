import { ChecksumConfiguration } from "./checksum.d.ts";
import { RetryStrategyConfiguration } from "./retry.d.ts";
/**
 * @internal
 *
 * Default extension configuration consisting various configurations for modifying a service client
 */
export interface DefaultExtensionConfiguration extends ChecksumConfiguration, RetryStrategyConfiguration {
}
