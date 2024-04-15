import { EventStreamMarshaller, EventStreamSerdeProvider } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
/**
 * @public
 */
export interface EventStreamSerdeInputConfig {
}
/**
 * @internal
 */
export interface EventStreamSerdeResolvedConfig {
    eventStreamMarshaller: EventStreamMarshaller;
}
interface PreviouslyResolved {
    /**
     * Provide the event stream marshaller for the given runtime
     * @internal
     */
    eventStreamSerdeProvider: EventStreamSerdeProvider;
}
/**
 * @internal
 */
export declare const resolveEventStreamSerdeConfig: <T>(input: T & PreviouslyResolved & EventStreamSerdeInputConfig) => T & EventStreamSerdeResolvedConfig;
export {};
