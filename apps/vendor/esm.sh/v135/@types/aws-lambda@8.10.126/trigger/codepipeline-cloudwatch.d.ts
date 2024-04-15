import { Handler } from "../handler.d.ts";
import { CodePipelineCloudWatchActionEvent } from "./codepipeline-cloudwatch-action.d.ts";
import { CodePipelineCloudWatchPipelineEvent } from "./codepipeline-cloudwatch-pipeline.d.ts";
import { CodePipelineCloudWatchStageEvent } from "./codepipeline-cloudwatch-stage.d.ts";

export type CodePipelineCloudWatchHandler = Handler<CodePipelineCloudWatchEvent, void>;

export type CodePipelineCloudWatchEvent =
    | CodePipelineCloudWatchPipelineEvent
    | CodePipelineCloudWatchStageEvent
    | CodePipelineCloudWatchActionEvent;
