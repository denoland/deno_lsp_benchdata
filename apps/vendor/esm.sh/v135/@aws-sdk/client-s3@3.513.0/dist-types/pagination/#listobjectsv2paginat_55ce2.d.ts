import { Paginator } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "../commands/ListObjectsV2Command.d.ts";
import { S3PaginationConfiguration } from "./Interfaces.d.ts";
/**
 * @public
 */
export declare const paginateListObjectsV2: (config: S3PaginationConfiguration, input: ListObjectsV2CommandInput, ...rest: any[]) => Paginator<ListObjectsV2CommandOutput>;
