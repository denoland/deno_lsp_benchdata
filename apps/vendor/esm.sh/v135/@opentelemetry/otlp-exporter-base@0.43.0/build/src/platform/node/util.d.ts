/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import * as http from 'https://esm.sh/v135/@types/node@18.16.19/http.d.ts';
import * as https from 'https://esm.sh/v135/@types/node@18.16.19/https.d.ts';
import { OTLPExporterNodeBase } from './OTLPExporterNodeBase.d.ts';
import { OTLPExporterNodeConfigBase } from './index.d.ts';
import { CompressionAlgorithm } from './types.d.ts';
import { OTLPExporterError } from '../../types.d.ts';
/**
 * Sends data using http
 * @param collector
 * @param data
 * @param contentType
 * @param onSuccess
 * @param onError
 */
export declare function sendWithHttp<ExportItem, ServiceRequest>(collector: OTLPExporterNodeBase<ExportItem, ServiceRequest>, data: string | Buffer, contentType: string, onSuccess: () => void, onError: (error: OTLPExporterError) => void): void;
export declare function createHttpAgent(config: OTLPExporterNodeConfigBase): http.Agent | https.Agent | undefined;
export declare function configureCompression(compression: CompressionAlgorithm | undefined): CompressionAlgorithm;
//# sourceMappingURL=util.d.ts.map
