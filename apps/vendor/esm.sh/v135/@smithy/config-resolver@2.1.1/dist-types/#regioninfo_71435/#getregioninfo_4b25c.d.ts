import { RegionInfo } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { PartitionHash } from "./PartitionHash.d.ts";
import { RegionHash } from "./RegionHash.d.ts";
/**
 * @internal
 */
export interface GetRegionInfoOptions {
    useFipsEndpoint?: boolean;
    useDualstackEndpoint?: boolean;
    signingService: string;
    regionHash: RegionHash;
    partitionHash: PartitionHash;
}
/**
 * @internal
 */
export declare const getRegionInfo: (region: string, { useFipsEndpoint, useDualstackEndpoint, signingService, regionHash, partitionHash, }: GetRegionInfoOptions) => RegionInfo;
