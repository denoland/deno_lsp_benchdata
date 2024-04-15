import { AwsCredentialIdentity } from "https://esm.sh/v135/@aws-sdk/types@3.511.0/dist-types/index.d.ts";
import { SignatureV4 } from "https://esm.sh/v135/@smithy/signature-v4@2.1.1/dist-types/index.d.ts";
import { HttpRequest as IHttpRequest, RequestPresigningArguments, RequestSigningArguments } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
export declare class SignatureV4S3Express extends SignatureV4 {
    /**
     * Signs with alternate provided credentials instead of those provided in the
     * constructor.
     *
     * Additionally omits the credential sessionToken and assigns it to the
     * alternate header field for S3 Express.
     */
    signWithCredentials(requestToSign: IHttpRequest, credentials: AwsCredentialIdentity, options?: RequestSigningArguments): Promise<IHttpRequest>;
    /**
     * Similar to {@link SignatureV4S3Express#signWithCredentials} but for presigning.
     */
    presignWithCredentials(requestToSign: IHttpRequest, credentials: AwsCredentialIdentity, options?: RequestPresigningArguments): Promise<IHttpRequest>;
}
