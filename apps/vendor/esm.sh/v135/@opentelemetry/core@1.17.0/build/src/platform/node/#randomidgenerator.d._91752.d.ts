import { IdGenerator } from '../../trace/IdGenerator.d.ts';
/**
 * @deprecated Use the one defined in @opentelemetry/sdk-trace-base instead.
 */
export declare class RandomIdGenerator implements IdGenerator {
    /**
     * Returns a random 16-byte trace ID formatted/encoded as a 32 lowercase hex
     * characters corresponding to 128 bits.
     */
    generateTraceId: () => string;
    /**
     * Returns a random 8-byte span ID formatted/encoded as a 16 lowercase hex
     * characters corresponding to 64 bits.
     */
    generateSpanId: () => string;
}
//# sourceMappingURL=RandomIdGenerator.d.ts.map
