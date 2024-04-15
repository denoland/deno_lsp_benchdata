import { WaiterConfiguration, WaiterResult } from "https://esm.sh/v135/@smithy/util-waiter@2.1.1/dist-types/index.d.ts";
import { HeadObjectCommandInput } from "../commands/HeadObjectCommand.d.ts";
import { S3Client } from "../S3Client.d.ts";
/**
 *
 *  @deprecated Use waitUntilObjectNotExists instead. waitForObjectNotExists does not throw error in non-success cases.
 */
export declare const waitForObjectNotExists: (params: WaiterConfiguration<S3Client>, input: HeadObjectCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadObjectCommand for polling.
 */
export declare const waitUntilObjectNotExists: (params: WaiterConfiguration<S3Client>, input: HeadObjectCommandInput) => Promise<WaiterResult>;
