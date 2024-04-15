import type { HandlerOptions } from "../types.d.ts";
import type { OAuthApp } from "../../index.d.ts";
import type { ClientType, Options } from "../../types.d.ts";
import type { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from "https://esm.sh/v135/@types/aws-lambda@8.10.126/index.d.ts";
export declare function createAWSLambdaAPIGatewayV2Handler(app: OAuthApp<Options<ClientType>>, options?: HandlerOptions): (event: APIGatewayProxyEventV2) => Promise<APIGatewayProxyStructuredResultV2 | undefined>;
