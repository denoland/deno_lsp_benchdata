import { ServiceClientType } from '../types.d.ts';
import { OTLPExporterBrowserBase as OTLPExporterBaseMain, OTLPExporterError, OTLPExporterConfigBase } from 'https://esm.sh/v135/@opentelemetry/otlp-exporter-base@0.43.0/build/src/index.d.ts';
/**
 * Collector Exporter abstract base class
 */
export declare abstract class OTLPProtoExporterBrowserBase<ExportItem, ServiceRequest> extends OTLPExporterBaseMain<ExportItem, ServiceRequest> {
    constructor(config?: OTLPExporterConfigBase);
    send(objects: ExportItem[], onSuccess: () => void, onError: (error: OTLPExporterError) => void): void;
    abstract getServiceClientType(): ServiceClientType;
}
//# sourceMappingURL=OTLPProtoExporterBrowserBase.d.ts.map
