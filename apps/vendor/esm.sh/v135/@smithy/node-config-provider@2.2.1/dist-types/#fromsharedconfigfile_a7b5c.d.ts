import { SourceProfileInit } from "https://esm.sh/v135/@smithy/shared-ini-file-loader@2.3.1/dist-types/index.d.ts";
import { ParsedIniData, Profile, Provider } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
export interface SharedConfigInit extends SourceProfileInit {
    /**
     * The preferred shared ini file to load the config. "config" option refers to
     * the shared config file(defaults to `~/.aws/config`). "credentials" option
     * refers to the shared credentials file(defaults to `~/.aws/credentials`)
     */
    preferredFile?: "config" | "credentials";
}
export type GetterFromConfig<T> = (profile: Profile, configFile?: ParsedIniData) => T | undefined;
/**
 * Get config value from the shared config files with inferred profile name.
 */
export declare const fromSharedConfigFiles: <T = string>(configSelector: GetterFromConfig<T>, { preferredFile, ...init }?: SharedConfigInit) => Provider<T>;
