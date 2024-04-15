import type * as logsAPI from 'https://esm.sh/v135/@opentelemetry/api-logs@0.46.0/build/src/index.d.ts';
import type { IResource } from 'https://esm.sh/v135/@opentelemetry/resources@1.17.0/build/src/index.d.ts';
import type { InstrumentationScope } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import type { LoggerConfig, LogRecordLimits } from './types.d.ts';
import { LoggerProvider } from './LoggerProvider.d.ts';
import { LogRecordProcessor } from './LogRecordProcessor.d.ts';
export declare class Logger implements logsAPI.Logger {
    readonly instrumentationScope: InstrumentationScope;
    private _loggerProvider;
    readonly resource: IResource;
    private readonly _loggerConfig;
    constructor(instrumentationScope: InstrumentationScope, config: LoggerConfig, _loggerProvider: LoggerProvider);
    emit(logRecord: logsAPI.LogRecord): void;
    getLogRecordLimits(): LogRecordLimits;
    getActiveLogRecordProcessor(): LogRecordProcessor;
}
//# sourceMappingURL=Logger.d.ts.map
