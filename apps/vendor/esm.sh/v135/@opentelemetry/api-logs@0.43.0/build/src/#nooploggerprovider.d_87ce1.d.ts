import { LoggerProvider } from './types/LoggerProvider.d.ts';
import { Logger } from './types/Logger.d.ts';
import { LoggerOptions } from './types/LoggerOptions.d.ts';
export declare class NoopLoggerProvider implements LoggerProvider {
    getLogger(_name: string, _version?: string | undefined, _options?: LoggerOptions | undefined): Logger;
}
export declare const NOOP_LOGGER_PROVIDER: NoopLoggerProvider;
//# sourceMappingURL=NoopLoggerProvider.d.ts.map
