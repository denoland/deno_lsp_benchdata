import { ResourceMetrics } from 'https://esm.sh/v135/@opentelemetry/sdk-metrics@1.17.0/build/src/index.d.ts';
import { OTLPMetricExporterOptions } from '../../OTLPMetricExporterOptions.d.ts';
import { OTLPMetricExporterBase } from '../../OTLPMetricExporterBase.d.ts';
import { OTLPExporterNodeBase, OTLPExporterNodeConfigBase } from 'https://esm.sh/v135/@opentelemetry/otlp-exporter-base@0.43.0/build/src/index.d.ts';
import { IExportMetricsServiceRequest } from 'https://esm.sh/v135/@opentelemetry/otlp-transformer@0.43.0/build/src/index.d.ts';
declare class OTLPExporterNodeProxy extends OTLPExporterNodeBase<ResourceMetrics, IExportMetricsServiceRequest> {
    constructor(config?: OTLPExporterNodeConfigBase & OTLPMetricExporterOptions);
    convert(metrics: ResourceMetrics[]): IExportMetricsServiceRequest;
    getDefaultUrl(config: OTLPExporterNodeConfigBase): string;
}
/**
 * Collector Metric Exporter for Node
 */
export declare class OTLPMetricExporter extends OTLPMetricExporterBase<OTLPExporterNodeProxy> {
    constructor(config?: OTLPExporterNodeConfigBase & OTLPMetricExporterOptions);
}
export {};
//# sourceMappingURL=OTLPMetricExporter.d.ts.map
