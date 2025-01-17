import { LoggerProvider } from '../types/LoggerProvider.d.ts';
import { Logger } from '../types/Logger.d.ts';
import { LoggerOptions } from '../types/LoggerOptions.d.ts';
export declare class LogsAPI {
    private static _instance?;
    private constructor();
    static getInstance(): LogsAPI;
    setGlobalLoggerProvider(provider: LoggerProvider): LoggerProvider;
    /**
     * Returns the global logger provider.
     *
     * @returns LoggerProvider
     */
    getLoggerProvider(): LoggerProvider;
    /**
     * Returns a logger from the global logger provider.
     *
     * @returns Logger
     */
    getLogger(name: string, version?: string, options?: LoggerOptions): Logger;
    /** Remove the global logger provider */
    disable(): void;
}
//# sourceMappingURL=logs.d.ts.map
