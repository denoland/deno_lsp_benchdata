import { Logger } from './types/Logger.d.ts';
import { LogRecord } from './types/LogRecord.d.ts';
export declare class NoopLogger implements Logger {
    emit(_logRecord: LogRecord): void;
}
export declare const NOOP_LOGGER: NoopLogger;
//# sourceMappingURL=NoopLogger.d.ts.map
