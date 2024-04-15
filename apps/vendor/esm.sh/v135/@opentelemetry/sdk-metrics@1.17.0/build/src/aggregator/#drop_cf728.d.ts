import { HrTime } from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import { AggregationTemporality } from '../export/AggregationTemporality.d.ts';
import { MetricData } from '../export/MetricData.d.ts';
import { InstrumentDescriptor } from '../InstrumentDescriptor.d.ts';
import { Maybe } from '../utils.d.ts';
import { AggregatorKind, Aggregator, AccumulationRecord } from './types.d.ts';
/** Basic aggregator for None which keeps no recorded value. */
export declare class DropAggregator implements Aggregator<undefined> {
    kind: AggregatorKind.DROP;
    createAccumulation(): undefined;
    merge(_previous: undefined, _delta: undefined): undefined;
    diff(_previous: undefined, _current: undefined): undefined;
    toMetricData(_descriptor: InstrumentDescriptor, _aggregationTemporality: AggregationTemporality, _accumulationByAttributes: AccumulationRecord<undefined>[], _endTime: HrTime): Maybe<MetricData>;
}
//# sourceMappingURL=Drop.d.ts.map
