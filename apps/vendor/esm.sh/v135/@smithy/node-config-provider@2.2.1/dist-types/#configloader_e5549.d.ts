import { Provider } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { GetterFromEnv } from "./fromEnv.d.ts";
import { GetterFromConfig, SharedConfigInit } from "./fromSharedConfigFiles.d.ts";
import { FromStaticConfig } from "./fromStatic.d.ts";
export type LocalConfigOptions = SharedConfigInit;
export interface LoadedConfigSelectors<T> {
    /**
     * A getter function getting the config values from all the environment
     * variables.
     */
    environmentVariableSelector: GetterFromEnv<T>;
    /**
     * A getter function getting config values associated with the inferred
     * profile from shared INI files
     */
    configFileSelector: GetterFromConfig<T>;
    /**
     * Default value or getter
     */
    default: FromStaticConfig<T>;
}
export declare const loadConfig: <T = string>({ environmentVariableSelector, configFileSelector, default: defaultValue }: LoadedConfigSelectors<T>, configuration?: LocalConfigOptions) => Provider<T>;
