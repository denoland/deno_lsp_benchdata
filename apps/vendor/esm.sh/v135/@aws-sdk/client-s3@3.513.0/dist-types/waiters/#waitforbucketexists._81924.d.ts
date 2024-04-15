import { WaiterConfiguration, WaiterResult } from "https://esm.sh/v135/@smithy/util-waiter@2.1.1/dist-types/index.d.ts";
import { HeadBucketCommandInput } from "../commands/HeadBucketCommand.d.ts";
import { S3Client } from "../S3Client.d.ts";
/**
 *
 *  @deprecated Use waitUntilBucketExists instead. waitForBucketExists does not throw error in non-success cases.
 */
export declare const waitForBucketExists: (params: WaiterConfiguration<S3Client>, input: HeadBucketCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to HeadBucketCommand for polling.
 */
export declare const waitUntilBucketExists: (params: WaiterConfiguration<S3Client>, input: HeadBucketCommandInput) => Promise<WaiterResult>;
