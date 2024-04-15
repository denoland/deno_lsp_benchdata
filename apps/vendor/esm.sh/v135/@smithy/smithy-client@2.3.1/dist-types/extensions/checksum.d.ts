import type { ChecksumAlgorithm, ChecksumConfiguration, ChecksumConstructor, HashConstructor } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { AlgorithmId } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
export { AlgorithmId, ChecksumAlgorithm, ChecksumConfiguration };
/**
 * @internal
 */
export type PartialChecksumRuntimeConfigType = Partial<{
    sha256: ChecksumConstructor | HashConstructor;
    md5: ChecksumConstructor | HashConstructor;
    crc32: ChecksumConstructor | HashConstructor;
    crc32c: ChecksumConstructor | HashConstructor;
    sha1: ChecksumConstructor | HashConstructor;
}>;
/**
 * @internal
 */
export declare const getChecksumConfiguration: (runtimeConfig: PartialChecksumRuntimeConfigType) => {
    _checksumAlgorithms: ChecksumAlgorithm[];
    addChecksumAlgorithm(algo: ChecksumAlgorithm): void;
    checksumAlgorithms(): ChecksumAlgorithm[];
};
/**
 * @internal
 */
export declare const resolveChecksumRuntimeConfig: (clientConfig: ChecksumConfiguration) => PartialChecksumRuntimeConfigType;
