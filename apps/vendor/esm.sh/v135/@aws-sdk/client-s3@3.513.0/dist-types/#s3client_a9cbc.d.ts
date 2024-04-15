/// <reference path="https://esm.sh/v135/node.ns.d.ts" />
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "https://esm.sh/v135/@aws-sdk/middleware-host-header@3.511.0/dist-types/index.d.ts";
import { S3InputConfig, S3ResolvedConfig } from "https://esm.sh/v135/@aws-sdk/middleware-sdk-s3@3.511.0/dist-types/index.d.ts";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "https://esm.sh/v135/@aws-sdk/middleware-signing@3.511.0/dist-types/index.d.ts";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "https://esm.sh/v135/@aws-sdk/middleware-user-agent@3.511.0/dist-types/index.d.ts";
import { Credentials as __Credentials, GetAwsChunkedEncodingStream } from "https://esm.sh/v135/@aws-sdk/types@3.511.0/dist-types/index.d.ts";
import { RegionInputConfig, RegionResolvedConfig } from "https://esm.sh/v135/@smithy/config-resolver@2.1.1/dist-types/index.d.ts";
import { EventStreamSerdeInputConfig, EventStreamSerdeResolvedConfig } from "https://esm.sh/v135/@smithy/eventstream-serde-config-resolver@2.1.1/dist-types/index.d.ts";
import { EndpointInputConfig, EndpointResolvedConfig } from "https://esm.sh/v135/@smithy/middleware-endpoint@2.4.1/dist-types/index.d.ts";
import { RetryInputConfig, RetryResolvedConfig } from "https://esm.sh/v135/@smithy/middleware-retry@2.1.1/dist-types/index.d.ts";
import { HttpHandler as __HttpHandler } from "https://esm.sh/v135/@smithy/protocol-http@3.1.1/dist-types/index.d.ts";
import { Client as __Client, DefaultsMode as __DefaultsMode, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
import { BodyLengthCalculator as __BodyLengthCalculator, CheckOptionalClientConfig as __CheckOptionalClientConfig, ChecksumConstructor as __ChecksumConstructor, Decoder as __Decoder, Encoder as __Encoder, EventStreamSerdeProvider as __EventStreamSerdeProvider, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Logger as __Logger, Provider as __Provider, Provider, SdkStreamMixinInjector as __SdkStreamMixinInjector, StreamCollector as __StreamCollector, StreamHasher as __StreamHasher, UrlParser as __UrlParser, UserAgent as __UserAgent } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
import { Readable } from "https://esm.sh/v135/@types/node@18.16.19/stream.d.ts";
import { AbortMultipartUploadCommandInput, AbortMultipartUploadCommandOutput } from "./commands/AbortMultipartUploadCommand.d.ts";
import { CompleteMultipartUploadCommandInput, CompleteMultipartUploadCommandOutput } from "./commands/CompleteMultipartUploadCommand.d.ts";
import { CopyObjectCommandInput, CopyObjectCommandOutput } from "./commands/CopyObjectCommand.d.ts";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand.d.ts";
import { CreateMultipartUploadCommandInput, CreateMultipartUploadCommandOutput } from "./commands/CreateMultipartUploadCommand.d.ts";
import { CreateSessionCommandInput, CreateSessionCommandOutput } from "./commands/CreateSessionCommand.d.ts";
import { DeleteBucketAnalyticsConfigurationCommandInput, DeleteBucketAnalyticsConfigurationCommandOutput } from "./commands/DeleteBucketAnalyticsConfigurationCommand.d.ts";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand.d.ts";
import { DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput } from "./commands/DeleteBucketCorsCommand.d.ts";
import { DeleteBucketEncryptionCommandInput, DeleteBucketEncryptionCommandOutput } from "./commands/DeleteBucketEncryptionCommand.d.ts";
import { DeleteBucketIntelligentTieringConfigurationCommandInput, DeleteBucketIntelligentTieringConfigurationCommandOutput } from "./commands/DeleteBucketIntelligentTieringConfigurationCommand.d.ts";
import { DeleteBucketInventoryConfigurationCommandInput, DeleteBucketInventoryConfigurationCommandOutput } from "./commands/DeleteBucketInventoryConfigurationCommand.d.ts";
import { DeleteBucketLifecycleCommandInput, DeleteBucketLifecycleCommandOutput } from "./commands/DeleteBucketLifecycleCommand.d.ts";
import { DeleteBucketMetricsConfigurationCommandInput, DeleteBucketMetricsConfigurationCommandOutput } from "./commands/DeleteBucketMetricsConfigurationCommand.d.ts";
import { DeleteBucketOwnershipControlsCommandInput, DeleteBucketOwnershipControlsCommandOutput } from "./commands/DeleteBucketOwnershipControlsCommand.d.ts";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "./commands/DeleteBucketPolicyCommand.d.ts";
import { DeleteBucketReplicationCommandInput, DeleteBucketReplicationCommandOutput } from "./commands/DeleteBucketReplicationCommand.d.ts";
import { DeleteBucketTaggingCommandInput, DeleteBucketTaggingCommandOutput } from "./commands/DeleteBucketTaggingCommand.d.ts";
import { DeleteBucketWebsiteCommandInput, DeleteBucketWebsiteCommandOutput } from "./commands/DeleteBucketWebsiteCommand.d.ts";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand.d.ts";
import { DeleteObjectsCommandInput, DeleteObjectsCommandOutput } from "./commands/DeleteObjectsCommand.d.ts";
import { DeleteObjectTaggingCommandInput, DeleteObjectTaggingCommandOutput } from "./commands/DeleteObjectTaggingCommand.d.ts";
import { DeletePublicAccessBlockCommandInput, DeletePublicAccessBlockCommandOutput } from "./commands/DeletePublicAccessBlockCommand.d.ts";
import { GetBucketAccelerateConfigurationCommandInput, GetBucketAccelerateConfigurationCommandOutput } from "./commands/GetBucketAccelerateConfigurationCommand.d.ts";
import { GetBucketAclCommandInput, GetBucketAclCommandOutput } from "./commands/GetBucketAclCommand.d.ts";
import { GetBucketAnalyticsConfigurationCommandInput, GetBucketAnalyticsConfigurationCommandOutput } from "./commands/GetBucketAnalyticsConfigurationCommand.d.ts";
import { GetBucketCorsCommandInput, GetBucketCorsCommandOutput } from "./commands/GetBucketCorsCommand.d.ts";
import { GetBucketEncryptionCommandInput, GetBucketEncryptionCommandOutput } from "./commands/GetBucketEncryptionCommand.d.ts";
import { GetBucketIntelligentTieringConfigurationCommandInput, GetBucketIntelligentTieringConfigurationCommandOutput } from "./commands/GetBucketIntelligentTieringConfigurationCommand.d.ts";
import { GetBucketInventoryConfigurationCommandInput, GetBucketInventoryConfigurationCommandOutput } from "./commands/GetBucketInventoryConfigurationCommand.d.ts";
import { GetBucketLifecycleConfigurationCommandInput, GetBucketLifecycleConfigurationCommandOutput } from "./commands/GetBucketLifecycleConfigurationCommand.d.ts";
import { GetBucketLocationCommandInput, GetBucketLocationCommandOutput } from "./commands/GetBucketLocationCommand.d.ts";
import { GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput } from "./commands/GetBucketLoggingCommand.d.ts";
import { GetBucketMetricsConfigurationCommandInput, GetBucketMetricsConfigurationCommandOutput } from "./commands/GetBucketMetricsConfigurationCommand.d.ts";
import { GetBucketNotificationConfigurationCommandInput, GetBucketNotificationConfigurationCommandOutput } from "./commands/GetBucketNotificationConfigurationCommand.d.ts";
import { GetBucketOwnershipControlsCommandInput, GetBucketOwnershipControlsCommandOutput } from "./commands/GetBucketOwnershipControlsCommand.d.ts";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand.d.ts";
import { GetBucketPolicyStatusCommandInput, GetBucketPolicyStatusCommandOutput } from "./commands/GetBucketPolicyStatusCommand.d.ts";
import { GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput } from "./commands/GetBucketReplicationCommand.d.ts";
import { GetBucketRequestPaymentCommandInput, GetBucketRequestPaymentCommandOutput } from "./commands/GetBucketRequestPaymentCommand.d.ts";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand.d.ts";
import { GetBucketVersioningCommandInput, GetBucketVersioningCommandOutput } from "./commands/GetBucketVersioningCommand.d.ts";
import { GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput } from "./commands/GetBucketWebsiteCommand.d.ts";
import { GetObjectAclCommandInput, GetObjectAclCommandOutput } from "./commands/GetObjectAclCommand.d.ts";
import { GetObjectAttributesCommandInput, GetObjectAttributesCommandOutput } from "./commands/GetObjectAttributesCommand.d.ts";
import { GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand.d.ts";
import { GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput } from "./commands/GetObjectLegalHoldCommand.d.ts";
import { GetObjectLockConfigurationCommandInput, GetObjectLockConfigurationCommandOutput } from "./commands/GetObjectLockConfigurationCommand.d.ts";
import { GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput } from "./commands/GetObjectRetentionCommand.d.ts";
import { GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput } from "./commands/GetObjectTaggingCommand.d.ts";
import { GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput } from "./commands/GetObjectTorrentCommand.d.ts";
import { GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput } from "./commands/GetPublicAccessBlockCommand.d.ts";
import { HeadBucketCommandInput, HeadBucketCommandOutput } from "./commands/HeadBucketCommand.d.ts";
import { HeadObjectCommandInput, HeadObjectCommandOutput } from "./commands/HeadObjectCommand.d.ts";
import { ListBucketAnalyticsConfigurationsCommandInput, ListBucketAnalyticsConfigurationsCommandOutput } from "./commands/ListBucketAnalyticsConfigurationsCommand.d.ts";
import { ListBucketIntelligentTieringConfigurationsCommandInput, ListBucketIntelligentTieringConfigurationsCommandOutput } from "./commands/ListBucketIntelligentTieringConfigurationsCommand.d.ts";
import { ListBucketInventoryConfigurationsCommandInput, ListBucketInventoryConfigurationsCommandOutput } from "./commands/ListBucketInventoryConfigurationsCommand.d.ts";
import { ListBucketMetricsConfigurationsCommandInput, ListBucketMetricsConfigurationsCommandOutput } from "./commands/ListBucketMetricsConfigurationsCommand.d.ts";
import { ListBucketsCommandInput, ListBucketsCommandOutput } from "./commands/ListBucketsCommand.d.ts";
import { ListDirectoryBucketsCommandInput, ListDirectoryBucketsCommandOutput } from "./commands/ListDirectoryBucketsCommand.d.ts";
import { ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput } from "./commands/ListMultipartUploadsCommand.d.ts";
import { ListObjectsCommandInput, ListObjectsCommandOutput } from "./commands/ListObjectsCommand.d.ts";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "./commands/ListObjectsV2Command.d.ts";
import { ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput } from "./commands/ListObjectVersionsCommand.d.ts";
import { ListPartsCommandInput, ListPartsCommandOutput } from "./commands/ListPartsCommand.d.ts";
import { PutBucketAccelerateConfigurationCommandInput, PutBucketAccelerateConfigurationCommandOutput } from "./commands/PutBucketAccelerateConfigurationCommand.d.ts";
import { PutBucketAclCommandInput, PutBucketAclCommandOutput } from "./commands/PutBucketAclCommand.d.ts";
import { PutBucketAnalyticsConfigurationCommandInput, PutBucketAnalyticsConfigurationCommandOutput } from "./commands/PutBucketAnalyticsConfigurationCommand.d.ts";
import { PutBucketCorsCommandInput, PutBucketCorsCommandOutput } from "./commands/PutBucketCorsCommand.d.ts";
import { PutBucketEncryptionCommandInput, PutBucketEncryptionCommandOutput } from "./commands/PutBucketEncryptionCommand.d.ts";
import { PutBucketIntelligentTieringConfigurationCommandInput, PutBucketIntelligentTieringConfigurationCommandOutput } from "./commands/PutBucketIntelligentTieringConfigurationCommand.d.ts";
import { PutBucketInventoryConfigurationCommandInput, PutBucketInventoryConfigurationCommandOutput } from "./commands/PutBucketInventoryConfigurationCommand.d.ts";
import { PutBucketLifecycleConfigurationCommandInput, PutBucketLifecycleConfigurationCommandOutput } from "./commands/PutBucketLifecycleConfigurationCommand.d.ts";
import { PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput } from "./commands/PutBucketLoggingCommand.d.ts";
import { PutBucketMetricsConfigurationCommandInput, PutBucketMetricsConfigurationCommandOutput } from "./commands/PutBucketMetricsConfigurationCommand.d.ts";
import { PutBucketNotificationConfigurationCommandInput, PutBucketNotificationConfigurationCommandOutput } from "./commands/PutBucketNotificationConfigurationCommand.d.ts";
import { PutBucketOwnershipControlsCommandInput, PutBucketOwnershipControlsCommandOutput } from "./commands/PutBucketOwnershipControlsCommand.d.ts";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand.d.ts";
import { PutBucketReplicationCommandInput, PutBucketReplicationCommandOutput } from "./commands/PutBucketReplicationCommand.d.ts";
import { PutBucketRequestPaymentCommandInput, PutBucketRequestPaymentCommandOutput } from "./commands/PutBucketRequestPaymentCommand.d.ts";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand.d.ts";
import { PutBucketVersioningCommandInput, PutBucketVersioningCommandOutput } from "./commands/PutBucketVersioningCommand.d.ts";
import { PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput } from "./commands/PutBucketWebsiteCommand.d.ts";
import { PutObjectAclCommandInput, PutObjectAclCommandOutput } from "./commands/PutObjectAclCommand.d.ts";
import { PutObjectCommandInput, PutObjectCommandOutput } from "./commands/PutObjectCommand.d.ts";
import { PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput } from "./commands/PutObjectLegalHoldCommand.d.ts";
import { PutObjectLockConfigurationCommandInput, PutObjectLockConfigurationCommandOutput } from "./commands/PutObjectLockConfigurationCommand.d.ts";
import { PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput } from "./commands/PutObjectRetentionCommand.d.ts";
import { PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput } from "./commands/PutObjectTaggingCommand.d.ts";
import { PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput } from "./commands/PutPublicAccessBlockCommand.d.ts";
import { RestoreObjectCommandInput, RestoreObjectCommandOutput } from "./commands/RestoreObjectCommand.d.ts";
import { SelectObjectContentCommandInput, SelectObjectContentCommandOutput } from "./commands/SelectObjectContentCommand.d.ts";
import { UploadPartCommandInput, UploadPartCommandOutput } from "./commands/UploadPartCommand.d.ts";
import { UploadPartCopyCommandInput, UploadPartCopyCommandOutput } from "./commands/UploadPartCopyCommand.d.ts";
import { WriteGetObjectResponseCommandInput, WriteGetObjectResponseCommandOutput } from "./commands/WriteGetObjectResponseCommand.d.ts";
import { ClientInputEndpointParameters, ClientResolvedEndpointParameters, EndpointParameters } from "./endpoint/EndpointParameters.d.ts";
import { RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions.d.ts";
export { __Client };
/**
 * @public
 */
export type ServiceInputTypes = AbortMultipartUploadCommandInput | CompleteMultipartUploadCommandInput | CopyObjectCommandInput | CreateBucketCommandInput | CreateMultipartUploadCommandInput | CreateSessionCommandInput | DeleteBucketAnalyticsConfigurationCommandInput | DeleteBucketCommandInput | DeleteBucketCorsCommandInput | DeleteBucketEncryptionCommandInput | DeleteBucketIntelligentTieringConfigurationCommandInput | DeleteBucketInventoryConfigurationCommandInput | DeleteBucketLifecycleCommandInput | DeleteBucketMetricsConfigurationCommandInput | DeleteBucketOwnershipControlsCommandInput | DeleteBucketPolicyCommandInput | DeleteBucketReplicationCommandInput | DeleteBucketTaggingCommandInput | DeleteBucketWebsiteCommandInput | DeleteObjectCommandInput | DeleteObjectTaggingCommandInput | DeleteObjectsCommandInput | DeletePublicAccessBlockCommandInput | GetBucketAccelerateConfigurationCommandInput | GetBucketAclCommandInput | GetBucketAnalyticsConfigurationCommandInput | GetBucketCorsCommandInput | GetBucketEncryptionCommandInput | GetBucketIntelligentTieringConfigurationCommandInput | GetBucketInventoryConfigurationCommandInput | GetBucketLifecycleConfigurationCommandInput | GetBucketLocationCommandInput | GetBucketLoggingCommandInput | GetBucketMetricsConfigurationCommandInput | GetBucketNotificationConfigurationCommandInput | GetBucketOwnershipControlsCommandInput | GetBucketPolicyCommandInput | GetBucketPolicyStatusCommandInput | GetBucketReplicationCommandInput | GetBucketRequestPaymentCommandInput | GetBucketTaggingCommandInput | GetBucketVersioningCommandInput | GetBucketWebsiteCommandInput | GetObjectAclCommandInput | GetObjectAttributesCommandInput | GetObjectCommandInput | GetObjectLegalHoldCommandInput | GetObjectLockConfigurationCommandInput | GetObjectRetentionCommandInput | GetObjectTaggingCommandInput | GetObjectTorrentCommandInput | GetPublicAccessBlockCommandInput | HeadBucketCommandInput | HeadObjectCommandInput | ListBucketAnalyticsConfigurationsCommandInput | ListBucketIntelligentTieringConfigurationsCommandInput | ListBucketInventoryConfigurationsCommandInput | ListBucketMetricsConfigurationsCommandInput | ListBucketsCommandInput | ListDirectoryBucketsCommandInput | ListMultipartUploadsCommandInput | ListObjectVersionsCommandInput | ListObjectsCommandInput | ListObjectsV2CommandInput | ListPartsCommandInput | PutBucketAccelerateConfigurationCommandInput | PutBucketAclCommandInput | PutBucketAnalyticsConfigurationCommandInput | PutBucketCorsCommandInput | PutBucketEncryptionCommandInput | PutBucketIntelligentTieringConfigurationCommandInput | PutBucketInventoryConfigurationCommandInput | PutBucketLifecycleConfigurationCommandInput | PutBucketLoggingCommandInput | PutBucketMetricsConfigurationCommandInput | PutBucketNotificationConfigurationCommandInput | PutBucketOwnershipControlsCommandInput | PutBucketPolicyCommandInput | PutBucketReplicationCommandInput | PutBucketRequestPaymentCommandInput | PutBucketTaggingCommandInput | PutBucketVersioningCommandInput | PutBucketWebsiteCommandInput | PutObjectAclCommandInput | PutObjectCommandInput | PutObjectLegalHoldCommandInput | PutObjectLockConfigurationCommandInput | PutObjectRetentionCommandInput | PutObjectTaggingCommandInput | PutPublicAccessBlockCommandInput | RestoreObjectCommandInput | SelectObjectContentCommandInput | UploadPartCommandInput | UploadPartCopyCommandInput | WriteGetObjectResponseCommandInput;
/**
 * @public
 */
export type ServiceOutputTypes = AbortMultipartUploadCommandOutput | CompleteMultipartUploadCommandOutput | CopyObjectCommandOutput | CreateBucketCommandOutput | CreateMultipartUploadCommandOutput | CreateSessionCommandOutput | DeleteBucketAnalyticsConfigurationCommandOutput | DeleteBucketCommandOutput | DeleteBucketCorsCommandOutput | DeleteBucketEncryptionCommandOutput | DeleteBucketIntelligentTieringConfigurationCommandOutput | DeleteBucketInventoryConfigurationCommandOutput | DeleteBucketLifecycleCommandOutput | DeleteBucketMetricsConfigurationCommandOutput | DeleteBucketOwnershipControlsCommandOutput | DeleteBucketPolicyCommandOutput | DeleteBucketReplicationCommandOutput | DeleteBucketTaggingCommandOutput | DeleteBucketWebsiteCommandOutput | DeleteObjectCommandOutput | DeleteObjectTaggingCommandOutput | DeleteObjectsCommandOutput | DeletePublicAccessBlockCommandOutput | GetBucketAccelerateConfigurationCommandOutput | GetBucketAclCommandOutput | GetBucketAnalyticsConfigurationCommandOutput | GetBucketCorsCommandOutput | GetBucketEncryptionCommandOutput | GetBucketIntelligentTieringConfigurationCommandOutput | GetBucketInventoryConfigurationCommandOutput | GetBucketLifecycleConfigurationCommandOutput | GetBucketLocationCommandOutput | GetBucketLoggingCommandOutput | GetBucketMetricsConfigurationCommandOutput | GetBucketNotificationConfigurationCommandOutput | GetBucketOwnershipControlsCommandOutput | GetBucketPolicyCommandOutput | GetBucketPolicyStatusCommandOutput | GetBucketReplicationCommandOutput | GetBucketRequestPaymentCommandOutput | GetBucketTaggingCommandOutput | GetBucketVersioningCommandOutput | GetBucketWebsiteCommandOutput | GetObjectAclCommandOutput | GetObjectAttributesCommandOutput | GetObjectCommandOutput | GetObjectLegalHoldCommandOutput | GetObjectLockConfigurationCommandOutput | GetObjectRetentionCommandOutput | GetObjectTaggingCommandOutput | GetObjectTorrentCommandOutput | GetPublicAccessBlockCommandOutput | HeadBucketCommandOutput | HeadObjectCommandOutput | ListBucketAnalyticsConfigurationsCommandOutput | ListBucketIntelligentTieringConfigurationsCommandOutput | ListBucketInventoryConfigurationsCommandOutput | ListBucketMetricsConfigurationsCommandOutput | ListBucketsCommandOutput | ListDirectoryBucketsCommandOutput | ListMultipartUploadsCommandOutput | ListObjectVersionsCommandOutput | ListObjectsCommandOutput | ListObjectsV2CommandOutput | ListPartsCommandOutput | PutBucketAccelerateConfigurationCommandOutput | PutBucketAclCommandOutput | PutBucketAnalyticsConfigurationCommandOutput | PutBucketCorsCommandOutput | PutBucketEncryptionCommandOutput | PutBucketIntelligentTieringConfigurationCommandOutput | PutBucketInventoryConfigurationCommandOutput | PutBucketLifecycleConfigurationCommandOutput | PutBucketLoggingCommandOutput | PutBucketMetricsConfigurationCommandOutput | PutBucketNotificationConfigurationCommandOutput | PutBucketOwnershipControlsCommandOutput | PutBucketPolicyCommandOutput | PutBucketReplicationCommandOutput | PutBucketRequestPaymentCommandOutput | PutBucketTaggingCommandOutput | PutBucketVersioningCommandOutput | PutBucketWebsiteCommandOutput | PutObjectAclCommandOutput | PutObjectCommandOutput | PutObjectLegalHoldCommandOutput | PutObjectLockConfigurationCommandOutput | PutObjectRetentionCommandOutput | PutObjectTaggingCommandOutput | PutPublicAccessBlockCommandOutput | RestoreObjectCommandOutput | SelectObjectContentCommandOutput | UploadPartCommandOutput | UploadPartCopyCommandOutput | WriteGetObjectResponseCommandOutput;
/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
    /**
     * The HTTP handler to use. Fetch in browser and Https in Nodejs.
     */
    requestHandler?: __HttpHandler;
    /**
     * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
     * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
     * @internal
     */
    sha256?: __ChecksumConstructor | __HashConstructor;
    /**
     * The function that will be used to convert strings into HTTP endpoints.
     * @internal
     */
    urlParser?: __UrlParser;
    /**
     * A function that can calculate the length of a request body.
     * @internal
     */
    bodyLengthChecker?: __BodyLengthCalculator;
    /**
     * A function that converts a stream into an array of bytes.
     * @internal
     */
    streamCollector?: __StreamCollector;
    /**
     * The function that will be used to convert a base64-encoded string to a byte array.
     * @internal
     */
    base64Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a base64-encoded string.
     * @internal
     */
    base64Encoder?: __Encoder;
    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array.
     * @internal
     */
    utf8Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string.
     * @internal
     */
    utf8Encoder?: __Encoder;
    /**
     * The runtime environment.
     * @internal
     */
    runtime?: string;
    /**
     * Disable dynamically changing the endpoint of the client based on the hostPrefix
     * trait of an operation.
     */
    disableHostPrefix?: boolean;
    /**
     * Unique service identifier.
     * @internal
     */
    serviceId?: string;
    /**
     * Enables IPv6/IPv4 dualstack endpoint.
     */
    useDualstackEndpoint?: boolean | __Provider<boolean>;
    /**
     * Enables FIPS compatible endpoints.
     */
    useFipsEndpoint?: boolean | __Provider<boolean>;
    /**
     * The AWS region to which this client will send requests
     */
    region?: string | __Provider<string>;
    /**
     * Default credentials provider; Not available in browser runtime.
     * @internal
     */
    credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
    /**
     * Whether to escape request path when signing the request.
     */
    signingEscapePath?: boolean;
    /**
     * Whether to override the request region with the region inferred from requested resource's ARN. Defaults to false.
     */
    useArnRegion?: boolean | Provider<boolean>;
    /**
     * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
     * @internal
     */
    defaultUserAgentProvider?: Provider<__UserAgent>;
    /**
     * A function that, given a hash constructor and a stream, calculates the
     * hash of the streamed value.
     * @internal
     */
    streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;
    /**
     * A constructor for a class implementing the {@link __Checksum} interface
     * that computes MD5 hashes.
     * @internal
     */
    md5?: __ChecksumConstructor | __HashConstructor;
    /**
     * A constructor for a class implementing the {@link __Checksum} interface
     * that computes SHA1 hashes.
     * @internal
     */
    sha1?: __ChecksumConstructor | __HashConstructor;
    /**
     * A function that returns Readable Stream which follows aws-chunked encoding stream.
     * @internal
     */
    getAwsChunkedEncodingStream?: GetAwsChunkedEncodingStream;
    /**
     * Value for how many times a request will be made at most in case of retry.
     */
    maxAttempts?: number | __Provider<number>;
    /**
     * Specifies which retry algorithm to use.
     * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
     *
     */
    retryMode?: string | __Provider<string>;
    /**
     * Optional logger for logging debug/info/warn/error.
     */
    logger?: __Logger;
    /**
     * Optional extensions
     */
    extensions?: RuntimeExtension[];
    /**
     * The function that provides necessary utilities for generating and parsing event stream
     */
    eventStreamSerdeProvider?: __EventStreamSerdeProvider;
    /**
     * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
     */
    defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
    /**
     * The internal function that inject utilities to runtime-specific stream to help users consume the data
     * @internal
     */
    sdkStreamMixin?: __SdkStreamMixinInjector;
}
/**
 * @public
 */
export type S3ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointInputConfig<EndpointParameters> & RetryInputConfig & HostHeaderInputConfig & AwsAuthInputConfig & S3InputConfig & UserAgentInputConfig & EventStreamSerdeInputConfig & ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of S3Client class constructor that set the region, credentials and other options.
 */
export interface S3ClientConfig extends S3ClientConfigType {
}
/**
 * @public
 */
export type S3ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RuntimeExtensionsConfig & RegionResolvedConfig & EndpointResolvedConfig<EndpointParameters> & RetryResolvedConfig & HostHeaderResolvedConfig & AwsAuthResolvedConfig & S3ResolvedConfig & UserAgentResolvedConfig & EventStreamSerdeResolvedConfig & ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of S3Client class. This is resolved and normalized from the {@link S3ClientConfig | constructor configuration interface}.
 */
export interface S3ClientResolvedConfig extends S3ClientResolvedConfigType {
}
/**
 * @public
 * <p></p>
 */
export declare class S3Client extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, S3ClientResolvedConfig> {
    /**
     * The resolved configuration of S3Client class. This is resolved and normalized from the {@link S3ClientConfig | constructor configuration interface}.
     */
    readonly config: S3ClientResolvedConfig;
    constructor(...[configuration]: __CheckOptionalClientConfig<S3ClientConfig>);
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    destroy(): void;
}
