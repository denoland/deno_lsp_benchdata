import { OTLPProtoExporterNodeBase } from './OTLPProtoExporterNodeBase.d.ts';
import { CompressionAlgorithm, OTLPExporterError } from 'https://esm.sh/v135/@opentelemetry/otlp-exporter-base@0.43.0/build/src/index.d.ts';
export declare function send<ExportItem, ServiceRequest>(collector: OTLPProtoExporterNodeBase<ExportItem, ServiceRequest>, objects: ExportItem[], compression: CompressionAlgorithm, onSuccess: () => void, onError: (error: OTLPExporterError) => void): void;
//# sourceMappingURL=util.d.ts.map
