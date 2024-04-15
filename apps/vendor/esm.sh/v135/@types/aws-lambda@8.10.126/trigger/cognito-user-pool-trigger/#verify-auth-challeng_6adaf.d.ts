import { Handler } from "../../handler.d.ts";
import { BaseTriggerEvent, StringMap } from "./_common.d.ts";

/**
 * @see https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-verify-auth-challenge-response.html
 */
export interface VerifyAuthChallengeResponseTriggerEvent
    extends BaseTriggerEvent<"VerifyAuthChallengeResponse_Authentication">
{
    request: {
        userAttributes: StringMap;
        privateChallengeParameters: StringMap;
        challengeAnswer: string;
        userNotFound?: boolean | undefined;
        clientMetadata?: StringMap | undefined;
    };
    response: {
        answerCorrect: boolean;
    };
}

export type VerifyAuthChallengeResponseTriggerHandler = Handler<VerifyAuthChallengeResponseTriggerEvent>;
