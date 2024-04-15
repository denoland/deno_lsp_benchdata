/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import type * as http from 'https://esm.sh/v135/@types/node@18.16.19/http.d.ts';
import type * as https from 'https://esm.sh/v135/@types/node@18.16.19/https.d.ts';
import { OTLPExporterConfigBase } from '../../types.d.ts';
/**
 * Collector Exporter node base config
 */
export interface OTLPExporterNodeConfigBase extends OTLPExporterConfigBase {
    keepAlive?: boolean;
    compression?: CompressionAlgorithm;
    httpAgentOptions?: http.AgentOptions | https.AgentOptions;
}
export declare enum CompressionAlgorithm {
    NONE = "none",
    GZIP = "gzip"
}
//# sourceMappingURL=types.d.ts.map
