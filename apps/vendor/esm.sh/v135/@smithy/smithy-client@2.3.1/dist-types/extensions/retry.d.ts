import { Provider, RetryStrategy, RetryStrategyConfiguration, RetryStrategyV2 } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
export type PartialRetryRuntimeConfigType = Partial<{
    retryStrategy: Provider<RetryStrategyV2 | RetryStrategy>;
}>;
/**
 * @internal
 */
export declare const getRetryConfiguration: (runtimeConfig: PartialRetryRuntimeConfigType) => {
    setRetryStrategy(retryStrategy: Provider<RetryStrategyV2 | RetryStrategy>): void;
    retryStrategy(): Provider<RetryStrategyV2 | RetryStrategy>;
};
/**
 * @internal
 */
export declare const resolveRetryRuntimeConfig: (retryStrategyConfiguration: RetryStrategyConfiguration) => PartialRetryRuntimeConfigType;
