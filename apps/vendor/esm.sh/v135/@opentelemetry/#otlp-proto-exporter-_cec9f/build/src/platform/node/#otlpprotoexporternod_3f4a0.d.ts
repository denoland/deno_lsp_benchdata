import { ServiceClientType } from '../types.d.ts';
import { OTLPExporterNodeBase as OTLPExporterBaseMain, OTLPExporterError, OTLPExporterNodeConfigBase } from 'https://esm.sh/v135/@opentelemetry/otlp-exporter-base@0.43.0/build/src/index.d.ts';
/**
 * Collector Exporter abstract base class
 */
export declare abstract class OTLPProtoExporterNodeBase<ExportItem, ServiceRequest> extends OTLPExporterBaseMain<ExportItem, ServiceRequest> {
    private _send;
    constructor(config?: OTLPExporterNodeConfigBase);
    private _sendPromise;
    send(objects: ExportItem[], onSuccess: () => void, onError: (error: OTLPExporterError) => void): void;
    abstract getServiceClientType(): ServiceClientType;
}
//# sourceMappingURL=OTLPProtoExporterNodeBase.d.ts.map
