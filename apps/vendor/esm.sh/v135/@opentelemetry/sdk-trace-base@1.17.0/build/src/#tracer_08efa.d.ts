import * as api from 'https://esm.sh/v135/@opentelemetry/api@1.6.0/build/src/index.d.ts';
import { InstrumentationLibrary } from 'https://esm.sh/v135/@opentelemetry/core@1.17.0/build/src/index.d.ts';
import { IResource } from 'https://esm.sh/v135/@opentelemetry/resources@1.17.0/build/src/index.d.ts';
import { BasicTracerProvider } from './BasicTracerProvider.d.ts';
import { GeneralLimits, SpanLimits, TracerConfig } from './types.d.ts';
import { SpanProcessor } from './SpanProcessor.d.ts';
/**
 * This class represents a basic tracer.
 */
export declare class Tracer implements api.Tracer {
    private _tracerProvider;
    private readonly _sampler;
    private readonly _generalLimits;
    private readonly _spanLimits;
    private readonly _idGenerator;
    readonly resource: IResource;
    readonly instrumentationLibrary: InstrumentationLibrary;
    /**
     * Constructs a new Tracer instance.
     */
    constructor(instrumentationLibrary: InstrumentationLibrary, config: TracerConfig, _tracerProvider: BasicTracerProvider);
    /**
     * Starts a new Span or returns the default NoopSpan based on the sampling
     * decision.
     */
    startSpan(name: string, options?: api.SpanOptions, context?: api.Context): api.Span;
    /**
     * Starts a new {@link Span} and calls the given function passing it the
     * created span as first argument.
     * Additionally the new span gets set in context and this context is activated
     * for the duration of the function call.
     *
     * @param name The name of the span
     * @param [options] SpanOptions used for span creation
     * @param [context] Context to use to extract parent
     * @param fn function called in the context of the span and receives the newly created span as an argument
     * @returns return value of fn
     * @example
     *   const something = tracer.startActiveSpan('op', span => {
     *     try {
     *       do some work
     *       span.setStatus({code: SpanStatusCode.OK});
     *       return something;
     *     } catch (err) {
     *       span.setStatus({
     *         code: SpanStatusCode.ERROR,
     *         message: err.message,
     *       });
     *       throw err;
     *     } finally {
     *       span.end();
     *     }
     *   });
     * @example
     *   const span = tracer.startActiveSpan('op', span => {
     *     try {
     *       do some work
     *       return span;
     *     } catch (err) {
     *       span.setStatus({
     *         code: SpanStatusCode.ERROR,
     *         message: err.message,
     *       });
     *       throw err;
     *     }
     *   });
     *   do some more work
     *   span.end();
     */
    startActiveSpan<F extends (span: api.Span) => ReturnType<F>>(name: string, fn: F): ReturnType<F>;
    startActiveSpan<F extends (span: api.Span) => ReturnType<F>>(name: string, opts: api.SpanOptions, fn: F): ReturnType<F>;
    startActiveSpan<F extends (span: api.Span) => ReturnType<F>>(name: string, opts: api.SpanOptions, ctx: api.Context, fn: F): ReturnType<F>;
    /** Returns the active {@link GeneralLimits}. */
    getGeneralLimits(): GeneralLimits;
    /** Returns the active {@link SpanLimits}. */
    getSpanLimits(): SpanLimits;
    getActiveSpanProcessor(): SpanProcessor;
}
//# sourceMappingURL=Tracer.d.ts.map
