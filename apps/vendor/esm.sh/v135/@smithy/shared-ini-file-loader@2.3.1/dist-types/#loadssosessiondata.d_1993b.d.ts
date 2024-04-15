import { ParsedIniData } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
export interface SsoSessionInit {
    /**
     * The path at which to locate the ini config file. Defaults to the value of
     * the `AWS_CONFIG_FILE` environment variable (if defined) or
     * `~/.aws/config` otherwise.
     */
    configFilepath?: string;
}
export declare const loadSsoSessionData: (init?: SsoSessionInit) => Promise<ParsedIniData>;
