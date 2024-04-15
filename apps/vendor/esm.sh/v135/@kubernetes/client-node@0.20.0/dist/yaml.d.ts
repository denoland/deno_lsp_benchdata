import * as yaml from 'https://esm.sh/v135/@types/js-yaml@4.0.9/index.d.ts';
export declare function loadYaml<T>(data: string, opts?: yaml.LoadOptions): T;
export declare function loadAllYaml(data: string, opts?: yaml.LoadOptions): any[];
export declare function dumpYaml(object: any, opts?: yaml.DumpOptions): string;
