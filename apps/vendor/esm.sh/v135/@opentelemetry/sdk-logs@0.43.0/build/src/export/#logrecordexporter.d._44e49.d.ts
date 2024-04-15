import type { ExportResult } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import type { ReadableLogRecord } from './ReadableLogRecord.d.ts';
export interface LogRecordExporter {
    /**
     * Called to export {@link ReadableLogRecord}s.
     * @param logs the list of sampled LogRecords to be exported.
     */
    export(logs: ReadableLogRecord[], resultCallback: (result: ExportResult) => void): void;
    /** Stops the exporter. */
    shutdown(): Promise<void>;
}
//# sourceMappingURL=LogRecordExporter.d.ts.map
