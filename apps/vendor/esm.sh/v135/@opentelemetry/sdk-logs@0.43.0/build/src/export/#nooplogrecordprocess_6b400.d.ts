import { LogRecordProcessor } from '../LogRecordProcessor.d.ts';
import { ReadableLogRecord } from './ReadableLogRecord.d.ts';
export declare class NoopLogRecordProcessor implements LogRecordProcessor {
    forceFlush(): Promise<void>;
    onEmit(_logRecord: ReadableLogRecord): void;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=NoopLogRecordProcessor.d.ts.map
