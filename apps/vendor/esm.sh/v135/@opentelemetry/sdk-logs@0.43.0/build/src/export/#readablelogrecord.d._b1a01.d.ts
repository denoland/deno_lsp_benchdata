import type { IResource } from 'https://esm.sh/v135/@opentelemetry/resources@1.17.0/build/src/index.d.ts';
import type { HrTime, SpanContext } from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import type { InstrumentationScope } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import type { LogAttributes, SeverityNumber } from 'https://esm.sh/v135/@opentelemetry/api-logs@0.46.0/build/src/index.d.ts';
export interface ReadableLogRecord {
    readonly hrTime: HrTime;
    readonly hrTimeObserved: HrTime;
    readonly spanContext?: SpanContext;
    readonly severityText?: string;
    readonly severityNumber?: SeverityNumber;
    readonly body?: string;
    readonly resource: IResource;
    readonly instrumentationScope: InstrumentationScope;
    readonly attributes: LogAttributes;
}
//# sourceMappingURL=ReadableLogRecord.d.ts.map
