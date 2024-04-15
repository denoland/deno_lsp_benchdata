import { EndpointRuleObject } from "./EndpointRuleObject.d.ts";
import { ErrorRuleObject } from "./ErrorRuleObject.d.ts";
import { ConditionObject } from "./shared.d.ts";
export type RuleSetRules = Array<EndpointRuleObject | ErrorRuleObject | TreeRuleObject>;
export type TreeRuleObject = {
    type: "tree";
    conditions?: ConditionObject[];
    rules: RuleSetRules;
    documentation?: string;
};
