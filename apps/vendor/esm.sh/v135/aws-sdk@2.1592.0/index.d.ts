import {GlobalConfigInstance} from './lib/config.d.ts';

export * from './lib/core.d.ts';
export * from './clients/all.d.ts';
export var config: GlobalConfigInstance

export as namespace AWS;
