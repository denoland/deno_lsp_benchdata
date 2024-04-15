import type { ReadableLogRecord } from 'https://esm.sh/v135/@opentelemetry/sdk-logs@0.43.0/build/src/index.d.ts';
import { IExportLogsServiceRequest } from './types.d.ts';
import { IKeyValue } from '../common/types.d.ts';
import { LogAttributes } from 'https://esm.sh/v135/@opentelemetry/api-logs@0.43.0/build/src/index.d.ts';
export declare function createExportLogsServiceRequest(logRecords: ReadableLogRecord[], useHex?: boolean): IExportLogsServiceRequest;
export declare function toLogAttributes(attributes: LogAttributes): IKeyValue[];
//# sourceMappingURL=index.d.ts.map
