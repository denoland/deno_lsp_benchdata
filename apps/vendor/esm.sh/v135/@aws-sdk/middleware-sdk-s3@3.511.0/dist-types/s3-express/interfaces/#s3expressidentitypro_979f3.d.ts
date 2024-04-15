import { AwsCredentialIdentity } from "https://esm.sh/v135/@aws-sdk/types@3.511.0/dist-types/index.d.ts";
import { S3ExpressIdentity } from "./S3ExpressIdentity.d.ts";
/**
 * @public
 */
export interface S3ExpressIdentityProvider {
    /**
     * @param awsIdentity - pre-existing credentials.
     * @param identityProperties - unknown.
     */
    getS3ExpressIdentity(awsIdentity: AwsCredentialIdentity, identityProperties: Record<string, string>): Promise<S3ExpressIdentity>;
}
