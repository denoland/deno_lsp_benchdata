import { ConditionObject, Expression } from "./shared.d.ts";
export type ErrorRuleObject = {
    type: "error";
    conditions?: ConditionObject[];
    error: Expression;
    documentation?: string;
};
