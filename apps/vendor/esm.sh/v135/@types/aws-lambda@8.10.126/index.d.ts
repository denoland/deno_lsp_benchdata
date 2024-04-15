export * from "./common/api-gateway.d.ts";
export * from "./common/cloudfront.d.ts";
export * from "./handler.d.ts";
export * from "./trigger/alb.d.ts";
// TODO: export * from "./trigger/alexa";
export * from "./trigger/api-gateway-authorizer.d.ts";
export * from "./trigger/api-gateway-proxy.d.ts";
export * from "./trigger/appsync-resolver.d.ts";
export * from "./trigger/autoscaling.d.ts";
// CloudTrail section just describes using S3 to trigger on cloudtrail changes.
export * from "./trigger/cdk-custom-resource.d.ts";
export * from "./trigger/cloudformation-custom-resource.d.ts";
export * from "./trigger/cloudfront-request.d.ts";
export * from "./trigger/cloudfront-response.d.ts";
export * from "./trigger/cloudwatch-events.d.ts";
export * from "./trigger/cloudwatch-logs.d.ts";
export * from "./trigger/codebuild-cloudwatch-state.d.ts";
export * from "./trigger/codecommit.d.ts";
export * from "./trigger/codepipeline.d.ts";
export * from "./trigger/codepipeline-cloudwatch.d.ts";
export * from "./trigger/codepipeline-cloudwatch-action.d.ts";
export * from "./trigger/codepipeline-cloudwatch-pipeline.d.ts";
export * from "./trigger/codepipeline-cloudwatch-stage.d.ts";
// TODO: export * from "./trigger/cognito-sync";
export * from "./trigger/cognito-user-pool-trigger/index.d.ts";
export * from "./trigger/connect-contact-flow.d.ts";
// TODO: export * from "./trigger/config";
export * from "./trigger/dynamodb-stream.d.ts";
export * from "./trigger/eventbridge.d.ts";
// ElastiCache section just describes using lambdas in an ElastiCache context (VPC issues, etc.)
// EC2 events are delivered using cloudwatch events...
export * from "./trigger/iot.d.ts";
export * from "./trigger/iot-authorizer.d.ts";
export * from "./trigger/kinesis-firehose-transformation.d.ts";
export * from "./trigger/kinesis-stream.d.ts";
export * from "./trigger/lex.d.ts";
export * from "./trigger/lex-v2.d.ts";
// RDS events are delivered using SNS events...
export * from "./trigger/amplify-resolver.d.ts";
export * from "./trigger/msk.d.ts";
export * from "./trigger/s3.d.ts";
export * from "./trigger/s3-batch.d.ts";
export * from "./trigger/s3-event-notification.d.ts";
export * from "./trigger/secretsmanager.d.ts";
export * from "./trigger/self-managed-kafka.d.ts";
export * from "./trigger/ses.d.ts";
export * from "./trigger/sns.d.ts";
export * from "./trigger/sqs.d.ts";

export as namespace AWSLambda;
