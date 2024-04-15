import { MeterProvider as IMeterProvider, Meter as IMeter, MeterOptions } from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import { IResource } from 'https://esm.sh/v135/@opentelemetry/resources@1.17.0/build/src/index.d.ts';
import { MetricReader } from './export/MetricReader.d.ts';
import { ForceFlushOptions, ShutdownOptions } from './types.d.ts';
import { View } from './view/View.d.ts';
/**
 * MeterProviderOptions provides an interface for configuring a MeterProvider.
 */
export interface MeterProviderOptions {
    /** Resource associated with metric telemetry  */
    resource?: IResource;
    views?: View[];
}
/**
 * This class implements the {@link MeterProvider} interface.
 */
export declare class MeterProvider implements IMeterProvider {
    private _sharedState;
    private _shutdown;
    constructor(options?: MeterProviderOptions);
    /**
     * Get a meter with the configuration of the MeterProvider.
     */
    getMeter(name: string, version?: string, options?: MeterOptions): IMeter;
    /**
     * Register a {@link MetricReader} to the meter provider. After the
     * registration, the MetricReader can start metrics collection.
     *
     * @param metricReader the metric reader to be registered.
     */
    addMetricReader(metricReader: MetricReader): void;
    /**
     * Flush all buffered data and shut down the MeterProvider and all registered
     * MetricReaders.
     *
     * Returns a promise which is resolved when all flushes are complete.
     */
    shutdown(options?: ShutdownOptions): Promise<void>;
    /**
     * Notifies all registered MetricReaders to flush any buffered data.
     *
     * Returns a promise which is resolved when all flushes are complete.
     */
    forceFlush(options?: ForceFlushOptions): Promise<void>;
}
//# sourceMappingURL=MeterProvider.d.ts.map
