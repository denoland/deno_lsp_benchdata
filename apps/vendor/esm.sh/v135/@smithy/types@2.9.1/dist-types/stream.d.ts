import { ChecksumConstructor } from "./checksum.d.ts";
import { HashConstructor, StreamHasher } from "./crypto.d.ts";
import { BodyLengthCalculator, Encoder } from "./util.d.ts";
/**
 * @public
 */
export interface GetAwsChunkedEncodingStreamOptions {
    base64Encoder?: Encoder;
    bodyLengthChecker: BodyLengthCalculator;
    checksumAlgorithmFn?: ChecksumConstructor | HashConstructor;
    checksumLocationName?: string;
    streamHasher?: StreamHasher;
}
/**
 * @public
 *
 * A function that returns Readable Stream which follows aws-chunked encoding stream.
 * It optionally adds checksum if options are provided.
 */
export interface GetAwsChunkedEncodingStream<StreamType = any> {
    (readableStream: StreamType, options: GetAwsChunkedEncodingStreamOptions): StreamType;
}
