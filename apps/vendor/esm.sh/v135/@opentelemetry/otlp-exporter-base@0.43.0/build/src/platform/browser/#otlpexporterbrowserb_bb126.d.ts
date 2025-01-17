import { OTLPExporterBase } from '../../OTLPExporterBase.d.ts';
import { OTLPExporterConfigBase } from '../../types.d.ts';
import * as otlpTypes from '../../types.d.ts';
/**
 * Collector Metric Exporter abstract base class
 */
export declare abstract class OTLPExporterBrowserBase<ExportItem, ServiceRequest> extends OTLPExporterBase<OTLPExporterConfigBase, ExportItem, ServiceRequest> {
    protected _headers: Record<string, string>;
    private _useXHR;
    /**
     * @param config
     */
    constructor(config?: OTLPExporterConfigBase);
    onInit(): void;
    onShutdown(): void;
    send(items: ExportItem[], onSuccess: () => void, onError: (error: otlpTypes.OTLPExporterError) => void): void;
}
//# sourceMappingURL=OTLPExporterBrowserBase.d.ts.map
