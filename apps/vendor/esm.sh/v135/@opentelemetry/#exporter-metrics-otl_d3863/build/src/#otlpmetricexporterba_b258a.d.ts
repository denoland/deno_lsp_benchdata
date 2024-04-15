import { ExportResult } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import { AggregationTemporality, AggregationTemporalitySelector, InstrumentType, PushMetricExporter, ResourceMetrics } from 'https://esm.sh/v135/@opentelemetry/sdk-metrics@1.17.0/build/src/index.d.ts';
import { OTLPMetricExporterOptions } from './OTLPMetricExporterOptions.d.ts';
import { OTLPExporterBase } from 'https://esm.sh/v135/@opentelemetry/otlp-exporter-base@0.43.0/build/src/index.d.ts';
import { IExportMetricsServiceRequest } from 'https://esm.sh/v135/@opentelemetry/otlp-transformer@0.43.0/build/src/index.d.ts';
export declare const CumulativeTemporalitySelector: AggregationTemporalitySelector;
export declare const DeltaTemporalitySelector: AggregationTemporalitySelector;
export declare const LowMemoryTemporalitySelector: AggregationTemporalitySelector;
export declare class OTLPMetricExporterBase<T extends OTLPExporterBase<OTLPMetricExporterOptions, ResourceMetrics, IExportMetricsServiceRequest>> implements PushMetricExporter {
    _otlpExporter: T;
    private _aggregationTemporalitySelector;
    constructor(exporter: T, config?: OTLPMetricExporterOptions);
    export(metrics: ResourceMetrics, resultCallback: (result: ExportResult) => void): void;
    shutdown(): Promise<void>;
    forceFlush(): Promise<void>;
    selectAggregationTemporality(instrumentType: InstrumentType): AggregationTemporality;
}
//# sourceMappingURL=OTLPMetricExporterBase.d.ts.map
