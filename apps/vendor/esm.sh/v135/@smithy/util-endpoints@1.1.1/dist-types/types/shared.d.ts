import { EndpointARN, EndpointPartition, Logger } from "https://esm.sh/v135/@smithy/types@2.9.1/dist-types/index.d.ts";
export type ReferenceObject = {
    ref: string;
};
export type FunctionObject = {
    fn: string;
    argv: FunctionArgv;
};
export type FunctionArgv = Array<Expression | boolean | number>;
export type FunctionReturn = string | boolean | number | EndpointARN | EndpointPartition | {
    [key: string]: FunctionReturn;
} | null;
export type ConditionObject = FunctionObject & {
    assign?: string;
};
export type Expression = string | ReferenceObject | FunctionObject;
export type EndpointParams = Record<string, string | boolean>;
export type EndpointResolverOptions = {
    endpointParams: EndpointParams;
    logger?: Logger;
};
export type ReferenceRecord = Record<string, FunctionReturn>;
export type EvaluateOptions = EndpointResolverOptions & {
    referenceRecord: ReferenceRecord;
};
