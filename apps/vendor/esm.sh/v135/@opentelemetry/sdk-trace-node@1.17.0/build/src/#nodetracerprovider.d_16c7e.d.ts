import { BasicTracerProvider, PROPAGATOR_FACTORY, SDKRegistrationConfig } from 'https://esm.sh/v135/@opentelemetry/sdk-trace-base@1.17.0/build/src/index.d.ts';
import { NodeTracerConfig } from './config.d.ts';
/**
 * Register this TracerProvider for use with the OpenTelemetry API.
 * Undefined values may be replaced with defaults, and
 * null values will be skipped.
 *
 * @param config Configuration object for SDK registration
 */
export declare class NodeTracerProvider extends BasicTracerProvider {
    protected static readonly _registeredPropagators: Map<string, PROPAGATOR_FACTORY>;
    constructor(config?: NodeTracerConfig);
    register(config?: SDKRegistrationConfig): void;
}
//# sourceMappingURL=NodeTracerProvider.d.ts.map
