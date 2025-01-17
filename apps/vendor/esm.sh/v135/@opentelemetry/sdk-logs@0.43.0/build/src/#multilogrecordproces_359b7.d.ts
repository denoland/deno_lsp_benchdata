import type { LogRecordProcessor } from './LogRecordProcessor.d.ts';
import type { LogRecord } from './LogRecord.d.ts';
/**
 * Implementation of the {@link LogRecordProcessor} that simply forwards all
 * received events to a list of {@link LogRecordProcessor}s.
 */
export declare class MultiLogRecordProcessor implements LogRecordProcessor {
    readonly processors: LogRecordProcessor[];
    readonly forceFlushTimeoutMillis: number;
    constructor(processors: LogRecordProcessor[], forceFlushTimeoutMillis: number);
    forceFlush(): Promise<void>;
    onEmit(logRecord: LogRecord): void;
    shutdown(): Promise<void>;
}
//# sourceMappingURL=MultiLogRecordProcessor.d.ts.map
