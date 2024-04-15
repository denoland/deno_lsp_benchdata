import { Logger } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @internal
 */
export declare class NoOpLogger implements Logger {
    trace(): void;
    debug(): void;
    info(): void;
    warn(): void;
    error(): void;
}
