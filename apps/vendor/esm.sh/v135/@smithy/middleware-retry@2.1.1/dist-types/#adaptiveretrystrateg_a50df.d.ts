import { FinalizeHandler, FinalizeHandlerArguments, MetadataBearer, Provider } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { RateLimiter } from "https://esm.sh/v135/@smithy/util-retry@2.1.1/dist-types/index.d.ts";
import { StandardRetryStrategy, StandardRetryStrategyOptions } from "./StandardRetryStrategy.d.ts";
/**
 * Strategy options to be passed to AdaptiveRetryStrategy
 */
export interface AdaptiveRetryStrategyOptions extends StandardRetryStrategyOptions {
    rateLimiter?: RateLimiter;
}
/**
 * @deprecated use AdaptiveRetryStrategy from @smithy/util-retry
 */
export declare class AdaptiveRetryStrategy extends StandardRetryStrategy {
    private rateLimiter;
    constructor(maxAttemptsProvider: Provider<number>, options?: AdaptiveRetryStrategyOptions);
    retry<Input extends object, Ouput extends MetadataBearer>(next: FinalizeHandler<Input, Ouput>, args: FinalizeHandlerArguments<Input>): Promise<{
        response: unknown;
        output: Ouput;
    }>;
}
