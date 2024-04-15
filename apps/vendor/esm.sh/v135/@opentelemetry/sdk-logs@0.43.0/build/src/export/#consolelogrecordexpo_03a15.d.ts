import { ExportResult } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import type { ReadableLogRecord } from './ReadableLogRecord.d.ts';
import type { LogRecordExporter } from './LogRecordExporter.d.ts';
/**
 * This is implementation of {@link LogRecordExporter} that prints LogRecords to the
 * console. This class can be used for diagnostic purposes.
 */
export declare class ConsoleLogRecordExporter implements LogRecordExporter {
    /**
     * Export logs.
     * @param logs
     * @param resultCallback
     */
    export(logs: ReadableLogRecord[], resultCallback: (result: ExportResult) => void): void;
    /**
     * Shutdown the exporter.
     */
    shutdown(): Promise<void>;
    /**
     * converts logRecord info into more readable format
     * @param logRecord
     */
    private _exportInfo;
    /**
     * Showing logs  in console
     * @param logRecords
     * @param done
     */
    private _sendLogRecords;
}
//# sourceMappingURL=ConsoleLogRecordExporter.d.ts.map
