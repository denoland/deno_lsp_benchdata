import { Paginator } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { ListDirectoryBucketsCommandInput, ListDirectoryBucketsCommandOutput } from "../commands/ListDirectoryBucketsCommand.d.ts";
import { S3PaginationConfiguration } from "./Interfaces.d.ts";
/**
 * @public
 */
export declare const paginateListDirectoryBuckets: (config: S3PaginationConfiguration, input: ListDirectoryBucketsCommandInput, ...rest: any[]) => Paginator<ListDirectoryBucketsCommandOutput>;
