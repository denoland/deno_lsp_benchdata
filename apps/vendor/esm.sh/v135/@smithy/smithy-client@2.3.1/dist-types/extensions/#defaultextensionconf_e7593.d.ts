import type { DefaultExtensionConfiguration } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { PartialChecksumRuntimeConfigType } from "./checksum.d.ts";
import { PartialRetryRuntimeConfigType } from "./retry.d.ts";
/**
 * @internal
 */
export type DefaultExtensionRuntimeConfigType = PartialRetryRuntimeConfigType & PartialChecksumRuntimeConfigType;
/**
 * @internal
 *
 * Helper function to resolve default extension configuration from runtime config
 */
export declare const getDefaultExtensionConfiguration: (runtimeConfig: DefaultExtensionRuntimeConfigType) => {
    setRetryStrategy(retryStrategy: import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").Provider<import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").RetryStrategy | import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").RetryStrategyV2>): void;
    retryStrategy(): import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").Provider<import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").RetryStrategy | import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").RetryStrategyV2>;
    _checksumAlgorithms: import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").ChecksumAlgorithm[];
    addChecksumAlgorithm(algo: import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").ChecksumAlgorithm): void;
    checksumAlgorithms(): import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").ChecksumAlgorithm[];
};
/**
 * @deprecated use getDefaultExtensionConfiguration
 * @internal
 *
 * Helper function to resolve default extension configuration from runtime config
 */
export declare const getDefaultClientConfiguration: (runtimeConfig: DefaultExtensionRuntimeConfigType) => {
    setRetryStrategy(retryStrategy: import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").Provider<import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").RetryStrategy | import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").RetryStrategyV2>): void;
    retryStrategy(): import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").Provider<import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").RetryStrategy | import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").RetryStrategyV2>;
    _checksumAlgorithms: import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").ChecksumAlgorithm[];
    addChecksumAlgorithm(algo: import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").ChecksumAlgorithm): void;
    checksumAlgorithms(): import("https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts").ChecksumAlgorithm[];
};
/**
 * @internal
 *
 * Helper function to resolve runtime config from default extension configuration
 */
export declare const resolveDefaultRuntimeConfig: (config: DefaultExtensionConfiguration) => DefaultExtensionRuntimeConfigType;
