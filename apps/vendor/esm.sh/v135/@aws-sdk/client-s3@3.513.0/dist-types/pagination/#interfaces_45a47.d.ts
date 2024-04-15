import { PaginationConfiguration } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { S3Client } from "../S3Client.d.ts";
/**
 * @public
 */
export interface S3PaginationConfiguration extends PaginationConfiguration {
    client: S3Client;
}
