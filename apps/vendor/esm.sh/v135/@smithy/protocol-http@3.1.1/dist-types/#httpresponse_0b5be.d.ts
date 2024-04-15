import { HeaderBag, HttpMessage, HttpResponse as IHttpResponse } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
type HttpResponseOptions = Partial<HttpMessage> & {
    statusCode: number;
    reason?: string;
};
export interface HttpResponse extends IHttpResponse {
}
export declare class HttpResponse {
    statusCode: number;
    reason?: string;
    headers: HeaderBag;
    body?: any;
    constructor(options: HttpResponseOptions);
    static isInstance(response: unknown): response is HttpResponse;
}
export {};
