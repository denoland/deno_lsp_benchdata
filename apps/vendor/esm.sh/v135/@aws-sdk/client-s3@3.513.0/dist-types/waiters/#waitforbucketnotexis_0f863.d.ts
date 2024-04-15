import { WaiterConfiguration, WaiterResult } from "https://esm.sh/v135/@smithy/util-waiter@2.1.1/dist-types/index.d.ts";
import { HeadBucketCommandInput } from "../commands/HeadBucketCommand.d.ts";
import { S3Client } from "../S3Client.d.ts";
/**
 *
 *  @deprecated Use waitUntilBucketNotExists instead. waitForBucketNotExists does not throw error in non-success cases.
 */
export declare const waitForBucketNotExists: (params: WaiterConfiguration<S3Client>, input: HeadBucketCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadBucketCommand for polling.
 */
export declare const waitUntilBucketNotExists: (params: WaiterConfiguration<S3Client>, input: HeadBucketCommandInput) => Promise<WaiterResult>;
