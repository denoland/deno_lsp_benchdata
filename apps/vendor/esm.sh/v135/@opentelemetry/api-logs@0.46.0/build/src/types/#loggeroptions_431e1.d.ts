import { Attributes } from 'https://esm.sh/v135/@opentelemetry/api@1.7.0/build/src/index.d.ts';
export interface LoggerOptions {
    /**
     * The schemaUrl of the tracer or instrumentation library
     * @default ''
     */
    schemaUrl?: string;
    /**
     * The instrumentation scope attributes to associate with emitted telemetry
     */
    scopeAttributes?: Attributes;
    /**
     * Specifies whether the Trace Context should automatically be passed on to the LogRecords emitted by the Logger.
     * @default true
     */
    includeTraceContext?: boolean;
}
//# sourceMappingURL=LoggerOptions.d.ts.map
