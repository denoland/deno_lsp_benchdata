import { OTLPExporterConfigBase } from 'https://esm.sh/v135/@opentelemetry/otlp-exporter-base@0.43.0/build/src/index.d.ts';
import { AggregationTemporality } from 'https://esm.sh/v135/@opentelemetry/sdk-metrics@1.17.0/build/src/index.d.ts';
export interface OTLPMetricExporterOptions extends OTLPExporterConfigBase {
    temporalityPreference?: AggregationTemporalityPreference | AggregationTemporality;
}
export declare enum AggregationTemporalityPreference {
    DELTA = 0,
    CUMULATIVE = 1,
    LOWMEMORY = 2
}
//# sourceMappingURL=OTLPMetricExporterOptions.d.ts.map
