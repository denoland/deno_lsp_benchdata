import { ExportResult } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import { InstrumentType } from '../InstrumentDescriptor.d.ts';
import { AggregationTemporality } from './AggregationTemporality.d.ts';
import { ResourceMetrics } from './MetricData.d.ts';
import { PushMetricExporter } from './MetricExporter.d.ts';
import { AggregationTemporalitySelector } from './AggregationSelector.d.ts';
interface ConsoleMetricExporterOptions {
    temporalitySelector?: AggregationTemporalitySelector;
}
export declare class ConsoleMetricExporter implements PushMetricExporter {
    protected _shutdown: boolean;
    protected _temporalitySelector: AggregationTemporalitySelector;
    constructor(options?: ConsoleMetricExporterOptions);
    export(metrics: ResourceMetrics, resultCallback: (result: ExportResult) => void): void;
    forceFlush(): Promise<void>;
    selectAggregationTemporality(_instrumentType: InstrumentType): AggregationTemporality;
    shutdown(): Promise<void>;
    private static _sendMetrics;
}
export {};
//# sourceMappingURL=ConsoleMetricExporter.d.ts.map
