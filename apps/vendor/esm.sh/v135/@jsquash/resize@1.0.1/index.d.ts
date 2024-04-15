import type { WorkerResizeOptions } from './meta.d.ts';
import type { InitInput as InitResizeInput } from './lib/resize/squoosh_resize.d.ts';
import type { InitInput as InitHqxInput } from './lib/hqx/squooshhqx.d.ts';
export declare function initResize(moduleOrPath?: InitResizeInput): Promise<unknown>;
export declare function initHqx(moduleOrPath?: InitHqxInput): Promise<unknown>;
export default function resize(data: ImageData, overrideOptions: Partial<WorkerResizeOptions> & {
    width: number;
    height: number;
}): Promise<ImageData>;
//# sourceMappingURL=index.d.ts.map
