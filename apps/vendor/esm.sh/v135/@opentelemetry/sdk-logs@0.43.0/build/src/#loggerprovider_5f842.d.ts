import type * as logsAPI from 'https://esm.sh/v135/@opentelemetry/api-logs@0.46.0/build/src/index.d.ts';
import { IResource } from 'https://esm.sh/v135/@opentelemetry/resources@1.17.0/build/src/index.d.ts';
import type { LoggerProviderConfig } from './types.d.ts';
import type { LogRecordProcessor } from './LogRecordProcessor.d.ts';
import { Logger } from './Logger.d.ts';
import { MultiLogRecordProcessor } from './MultiLogRecordProcessor.d.ts';
export declare const DEFAULT_LOGGER_NAME = "unknown";
export declare class LoggerProvider implements logsAPI.LoggerProvider {
    readonly resource: IResource;
    private readonly _loggers;
    private _activeProcessor;
    private readonly _registeredLogRecordProcessors;
    private readonly _config;
    private _shutdownOnce;
    constructor(config?: LoggerProviderConfig);
    /**
     * Get a logger with the configuration of the LoggerProvider.
     */
    getLogger(name: string, version?: string, options?: logsAPI.LoggerOptions): logsAPI.Logger;
    /**
     * Adds a new {@link LogRecordProcessor} to this logger.
     * @param processor the new LogRecordProcessor to be added.
     */
    addLogRecordProcessor(processor: LogRecordProcessor): void;
    /**
     * Notifies all registered LogRecordProcessor to flush any buffered data.
     *
     * Returns a promise which is resolved when all flushes are complete.
     */
    forceFlush(): Promise<void>;
    /**
     * Flush all buffered data and shut down the LoggerProvider and all registered
     * LogRecordProcessor.
     *
     * Returns a promise which is resolved when all flushes are complete.
     */
    shutdown(): Promise<void>;
    getActiveLogRecordProcessor(): MultiLogRecordProcessor;
    getActiveLoggers(): Map<string, Logger>;
    private _shutdown;
}
//# sourceMappingURL=LoggerProvider.d.ts.map
