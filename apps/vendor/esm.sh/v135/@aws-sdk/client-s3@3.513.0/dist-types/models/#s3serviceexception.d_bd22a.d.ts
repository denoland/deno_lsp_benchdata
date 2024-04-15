import { ServiceException as __ServiceException, ServiceExceptionOptions as __ServiceExceptionOptions } from "https://esm.sh/v135/@smithy/smithy-client@2.3.1/dist-types/index.d.ts";
export { __ServiceException, __ServiceExceptionOptions };
/**
 * @public
 *
 * Base exception class for all service exceptions from S3 service.
 */
export declare class S3ServiceException extends __ServiceException {
    /**
     * @internal
     */
    constructor(options: __ServiceExceptionOptions);
}
