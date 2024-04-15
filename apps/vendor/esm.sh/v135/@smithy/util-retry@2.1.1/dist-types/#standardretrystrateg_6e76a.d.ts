import { Provider, RetryErrorInfo, RetryStrategyV2, StandardRetryToken } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @public
 */
export declare class StandardRetryStrategy implements RetryStrategyV2 {
    private readonly maxAttempts;
    readonly mode: string;
    private capacity;
    private readonly retryBackoffStrategy;
    private readonly maxAttemptsProvider;
    constructor(maxAttempts: number);
    constructor(maxAttemptsProvider: Provider<number>);
    acquireInitialRetryToken(retryTokenScope: string): Promise<StandardRetryToken>;
    refreshRetryTokenForRetry(token: StandardRetryToken, errorInfo: RetryErrorInfo): Promise<StandardRetryToken>;
    recordSuccess(token: StandardRetryToken): void;
    /**
     * @returns the current available retry capacity.
     *
     * This number decreases when retries are executed and refills when requests or retries succeed.
     */
    getCapacity(): number;
    private getMaxAttempts;
    private shouldRetry;
    private getCapacityCost;
    private isRetryableError;
}
