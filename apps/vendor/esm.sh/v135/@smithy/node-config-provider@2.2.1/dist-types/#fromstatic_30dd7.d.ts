import { Provider } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
export type FromStaticConfig<T> = T | (() => T) | Provider<T>;
export declare const fromStatic: <T>(defaultValue: FromStaticConfig<T>) => Provider<T>;
