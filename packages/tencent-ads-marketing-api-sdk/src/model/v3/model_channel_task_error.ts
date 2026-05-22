// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_channel_task_error.go
// Do not edit manually.

export const ChannelTaskError = {
  NORMAL: "TASK_ERROR_NORMAL",
  UNABLE_DOWNLOAD: "TASK_ERROR_UNABLE_DOWNLOAD",
  MISMATCH_PACKAGENAME: "TASK_ERROR_MISMATCH_PACKAGENAME",
  ILLEGAL_VERSION: "TASK_ERROR_ILLEGAL_VERSION",
  DUPLICATE_PACKAGE: "TASK_ERROR_DUPLICATE_PACKAGE",
  PARSE_FAIL: "TASK_ERROR_PARSE_FAIL",
  MISS_YSDK: "TASK_ERROR_MISS_YSDK",
  UPLOAD_FAIL: "TASK_ERROR_UPLOAD_FAIL",
  SUBMIT_FAIL: "TASK_ERROR_SUBMIT_FAIL",
  SERVER_ERROR: "TASK_ERROR_SERVER_ERROR",
} as const;

export type ChannelTaskError = typeof ChannelTaskError[keyof typeof ChannelTaskError];

