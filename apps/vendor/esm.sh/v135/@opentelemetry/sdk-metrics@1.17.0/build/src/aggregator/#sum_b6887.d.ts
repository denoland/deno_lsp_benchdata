import { Sum, AggregatorKind, Aggregator, Accumulation, AccumulationRecord } from './types.d.ts';
import { HrTime } from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import { SumMetricData } from '../export/MetricData.d.ts';
import { InstrumentDescriptor } from '../InstrumentDescriptor.d.ts';
import { Maybe } from '../utils.d.ts';
import { AggregationTemporality } from '../export/AggregationTemporality.d.ts';
export declare class SumAccumulation implements Accumulation {
    startTime: HrTime;
    monotonic: boolean;
    private _current;
    reset: boolean;
    constructor(startTime: HrTime, monotonic: boolean, _current?: number, reset?: boolean);
    record(value: number): void;
    setStartTime(startTime: HrTime): void;
    toPointValue(): Sum;
}
/** Basic aggregator which calculates a Sum from individual measurements. */
export declare class SumAggregator implements Aggregator<SumAccumulation> {
    monotonic: boolean;
    kind: AggregatorKind.SUM;
    constructor(monotonic: boolean);
    createAccumulation(startTime: HrTime): SumAccumulation;
    /**
     * Returns the result of the merge of the given accumulations.
     */
    merge(previous: SumAccumulation, delta: SumAccumulation): SumAccumulation;
    /**
     * Returns a new DELTA aggregation by comparing two cumulative measurements.
     */
    diff(previous: SumAccumulation, current: SumAccumulation): SumAccumulation;
    toMetricData(descriptor: InstrumentDescriptor, aggregationTemporality: AggregationTemporality, accumulationByAttributes: AccumulationRecord<SumAccumulation>[], endTime: HrTime): Maybe<SumMetricData>;
}
//# sourceMappingURL=Sum.d.ts.map
