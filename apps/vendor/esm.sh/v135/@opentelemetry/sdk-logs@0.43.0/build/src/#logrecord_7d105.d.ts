import { AttributeValue } from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import type * as logsAPI from 'https://esm.sh/v135/@opentelemetry/api-logs@0.46.0/build/src/index.d.ts';
import * as api from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import { InstrumentationScope } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import type { IResource } from 'https://esm.sh/v135/@opentelemetry/resources@1.17.0/build/src/index.d.ts';
import type { ReadableLogRecord } from './export/ReadableLogRecord.d.ts';
import { Logger } from './Logger.d.ts';
import { LogAttributes } from 'https://esm.sh/v135/@opentelemetry/api-logs@0.46.0/build/src/index.d.ts';
export declare class LogRecord implements ReadableLogRecord {
    readonly hrTime: api.HrTime;
    readonly hrTimeObserved: api.HrTime;
    readonly spanContext?: api.SpanContext;
    readonly resource: IResource;
    readonly instrumentationScope: InstrumentationScope;
    readonly attributes: logsAPI.LogAttributes;
    private _severityText?;
    private _severityNumber?;
    private _body?;
    private _isReadonly;
    private readonly _logRecordLimits;
    set severityText(severityText: string | undefined);
    get severityText(): string | undefined;
    set severityNumber(severityNumber: logsAPI.SeverityNumber | undefined);
    get severityNumber(): logsAPI.SeverityNumber | undefined;
    set body(body: string | undefined);
    get body(): string | undefined;
    constructor(logger: Logger, logRecord: logsAPI.LogRecord);
    setAttribute(key: string, value?: LogAttributes | AttributeValue): this;
    setAttributes(attributes: LogAttributes): this;
    setBody(body: string): this;
    setSeverityNumber(severityNumber: logsAPI.SeverityNumber): this;
    setSeverityText(severityText: string): this;
    /**
     * A LogRecordProcessor may freely modify logRecord for the duration of the OnEmit call.
     * If logRecord is needed after OnEmit returns (i.e. for asynchronous processing) only reads are permitted.
     */
    makeReadonly(): void;
    private _truncateToSize;
    private _truncateToLimitUtil;
    private _isLogRecordReadonly;
}
//# sourceMappingURL=LogRecord.d.ts.map
