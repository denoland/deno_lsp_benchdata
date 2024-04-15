import { ReadableSpan, SpanExporter } from 'https://esm.sh/v135/@opentelemetry/sdk-trace-base@1.17.0/build/src/index.d.ts';
import { OTLPExporterNodeConfigBase } from 'https://esm.sh/v135/@opentelemetry/otlp-exporter-base@0.43.0/build/src/index.d.ts';
import { OTLPProtoExporterNodeBase, ServiceClientType } from 'https://esm.sh/v135/@opentelemetry/otlp-proto-exporter-base@0.43.0/build/src/index.d.ts';
import { IExportTraceServiceRequest } from 'https://esm.sh/v135/@opentelemetry/otlp-transformer@0.43.0/build/src/index.d.ts';
/**
 * Collector Trace Exporter for Node with protobuf
 */
export declare class OTLPTraceExporter extends OTLPProtoExporterNodeBase<ReadableSpan, IExportTraceServiceRequest> implements SpanExporter {
    constructor(config?: OTLPExporterNodeConfigBase);
    convert(spans: ReadableSpan[]): IExportTraceServiceRequest;
    getDefaultUrl(config: OTLPExporterNodeConfigBase): string;
    getServiceClientType(): ServiceClientType;
}
//# sourceMappingURL=OTLPTraceExporter.d.ts.map
