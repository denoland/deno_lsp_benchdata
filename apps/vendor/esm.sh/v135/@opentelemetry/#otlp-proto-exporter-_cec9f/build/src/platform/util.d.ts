import { ServiceClientType } from './types.d.ts';
import type * as protobuf from 'https://esm.sh/v135/protobufjs@7.2.5/index.d.ts';
export interface ExportRequestType<T, R = T & {
    toJSON: () => unknown;
}> {
    create(properties?: T): R;
    encode(message: T, writer?: protobuf.Writer): protobuf.Writer;
    decode(reader: protobuf.Reader | Uint8Array, length?: number): R;
}
export declare function getExportRequestProto<ServiceRequest>(clientType: ServiceClientType): ExportRequestType<ServiceRequest>;
//# sourceMappingURL=util.d.ts.map
