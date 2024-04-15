import { createEventHandler } from "./event-handler/index.d.ts";
import type { EmitterWebhookEvent, EmitterWebhookEventName, HandlerFunction, RemoveHandlerFunction, Options, WebhookError, WebhookEventHandlerError, EmitterWebhookEventWithStringPayloadAndSignature } from "./types.d.ts";
export { createNodeMiddleware } from "./middleware/node/index.d.ts";
export { emitterEventNames } from "./generated/webhook-names.d.ts";
declare class Webhooks<TTransformed = unknown> {
    sign: (payload: string) => Promise<string>;
    verify: (eventPayload: string, signature: string) => Promise<boolean>;
    on: <E extends EmitterWebhookEventName>(event: E | E[], callback: HandlerFunction<E, TTransformed>) => void;
    onAny: (callback: (event: TTransformed extends unknown ? EmitterWebhookEvent : EmitterWebhookEvent & TTransformed) => any) => void;
    onError: (callback: (event: WebhookEventHandlerError<TTransformed>) => any) => void;
    removeListener: <E extends EmitterWebhookEventName | "*">(event: E | E[], callback: RemoveHandlerFunction<E, TTransformed>) => void;
    receive: (event: EmitterWebhookEvent) => Promise<void>;
    verifyAndReceive: (options: EmitterWebhookEventWithStringPayloadAndSignature) => Promise<void>;
    constructor(options: Options<TTransformed> & {
        secret: string;
    });
}
export { createEventHandler, Webhooks, type EmitterWebhookEvent, type EmitterWebhookEventName, type WebhookError, };
