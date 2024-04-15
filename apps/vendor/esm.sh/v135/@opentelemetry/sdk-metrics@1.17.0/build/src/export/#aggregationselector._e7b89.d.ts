import { InstrumentType } from '../InstrumentDescriptor.d.ts';
import { Aggregation } from '../view/Aggregation.d.ts';
import { AggregationTemporality } from './AggregationTemporality.d.ts';
/**
 * Aggregation selector based on metric instrument types.
 */
export declare type AggregationSelector = (instrumentType: InstrumentType) => Aggregation;
/**
 * Aggregation temporality selector based on metric instrument types.
 */
export declare type AggregationTemporalitySelector = (instrumentType: InstrumentType) => AggregationTemporality;
export declare const DEFAULT_AGGREGATION_SELECTOR: AggregationSelector;
export declare const DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR: AggregationTemporalitySelector;
//# sourceMappingURL=AggregationSelector.d.ts.map
