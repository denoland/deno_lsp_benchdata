import { Paginator } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand.d.ts";
import { S3PaginationConfiguration } from "./Interfaces.d.ts";
/**
 * @public
 */
export declare const paginateListParts: (config: S3PaginationConfiguration, input: ListPartsCommandInput, ...rest: any[]) => Paginator<ListPartsCommandOutput>;
