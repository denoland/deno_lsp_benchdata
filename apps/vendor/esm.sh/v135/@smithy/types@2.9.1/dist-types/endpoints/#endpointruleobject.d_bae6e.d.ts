import { EndpointObjectProperty } from "../endpoint.d.ts";
import { ConditionObject, Expression } from "./shared.d.ts";
export type EndpointObjectProperties = Record<string, EndpointObjectProperty>;
export type EndpointObjectHeaders = Record<string, Expression[]>;
export type EndpointObject = {
    url: Expression;
    properties?: EndpointObjectProperties;
    headers?: EndpointObjectHeaders;
};
export type EndpointRuleObject = {
    type: "endpoint";
    conditions?: ConditionObject[];
    endpoint: EndpointObject;
    documentation?: string;
};
