import { ParsedIniData } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { SharedConfigInit } from "./loadSharedConfigFiles.d.ts";
export interface SourceProfileInit extends SharedConfigInit {
    /**
     * The configuration profile to use.
     */
    profile?: string;
}
/**
 * Load profiles from credentials and config INI files and normalize them into a
 * single profile list.
 *
 * @internal
 */
export declare const parseKnownFiles: (init: SourceProfileInit) => Promise<ParsedIniData>;
