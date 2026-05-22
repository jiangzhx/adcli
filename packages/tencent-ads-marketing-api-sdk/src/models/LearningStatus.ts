// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const LearningStatus = {
  PROCESSING: "LEARNING_STATUS_PROCESSING",
  SUGGEST_CONTINUE: "LEARNING_STATUS_SUGGEST_CONTINUE",
  SUGGEST_STOP: "LEARNING_STATUS_SUGGEST_STOP",
  SUGGEST_IMPROVE: "LEARNING_STATUS_SUGGEST_IMPROVE",
  UNKNOWN: "LEARNING_STATUS_UNKNOWN",
  WIP: "LEARNING_STATUS_WIP",
  FINISHED: "LEARNING_STATUS_FINISHED",
  FAILED: "LEARNING_STATUS_FAILED",
} as const;

export type LearningStatus = typeof LearningStatus[keyof typeof LearningStatus];

