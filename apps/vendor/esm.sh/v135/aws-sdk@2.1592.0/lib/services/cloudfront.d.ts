import {Service} from '../service.d.ts';
import {Signer} from '../cloudfront/signer.d.ts';
export class CloudFrontCustomizations extends Service {
    static Signer: typeof Signer;
}
