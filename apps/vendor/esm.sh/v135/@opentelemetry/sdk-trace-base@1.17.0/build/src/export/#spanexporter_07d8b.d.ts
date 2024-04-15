import { ExportResult } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import { ReadableSpan } from './ReadableSpan.d.ts';
/**
 * An interface that allows different tracing services to export recorded data
 * for sampled spans in their own format.
 *
 * To export data this MUST be register to the Tracer SDK using a optional
 * config.
 */
export interface SpanExporter {
    /**
     * Called to export sampled {@link ReadableSpan}s.
     * @param spans the list of sampled Spans to be exported.
     */
    export(spans: ReadableSpan[], resultCallback: (result: ExportResult) => void): void;
    /** Stops the exporter. */
    shutdown(): Promise<void>;
    /** Immediately export all spans */
    forceFlush?(): Promise<void>;
}
//# sourceMappingURL=SpanExporter.d.ts.map
