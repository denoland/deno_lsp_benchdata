import type { LogRecordExporter } from './LogRecordExporter.d.ts';
import type { LogRecordProcessor } from '../LogRecordProcessor.d.ts';
import type { LogRecord } from './../LogRecord.d.ts';
export declare class SimpleLogRecordProcessor implements LogRecordProcessor {
    private readonly _exporter;
    private _shutdownOnce;
    constructor(_exporter: LogRecordExporter);
    onEmit(logRecord: LogRecord): void;
    forceFlush(): Promise<void>;
    shutdown(): Promise<void>;
    private _shutdown;
}
//# sourceMappingURL=SimpleLogRecordProcessor.d.ts.map
