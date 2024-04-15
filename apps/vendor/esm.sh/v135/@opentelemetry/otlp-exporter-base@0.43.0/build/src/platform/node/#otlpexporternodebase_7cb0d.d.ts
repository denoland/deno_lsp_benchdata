/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import type * as http from 'https://esm.sh/v135/@types/node@18.16.19/http.d.ts';
import type * as https from 'https://esm.sh/v135/@types/node@18.16.19/https.d.ts';
import { OTLPExporterBase } from '../../OTLPExporterBase.d.ts';
import { OTLPExporterNodeConfigBase, CompressionAlgorithm } from './types.d.ts';
import * as otlpTypes from '../../types.d.ts';
/**
 * Collector Metric Exporter abstract base class
 */
export declare abstract class OTLPExporterNodeBase<ExportItem, ServiceRequest> extends OTLPExporterBase<OTLPExporterNodeConfigBase, ExportItem, ServiceRequest> {
    DEFAULT_HEADERS: Record<string, string>;
    headers: Record<string, string>;
    agent: http.Agent | https.Agent | undefined;
    compression: CompressionAlgorithm;
    constructor(config?: OTLPExporterNodeConfigBase);
    onInit(_config: OTLPExporterNodeConfigBase): void;
    send(objects: ExportItem[], onSuccess: () => void, onError: (error: otlpTypes.OTLPExporterError) => void): void;
    onShutdown(): void;
}
//# sourceMappingURL=OTLPExporterNodeBase.d.ts.map
