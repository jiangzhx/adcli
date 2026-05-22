// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const TaskResultStatus = {
  UNKNOWN: "TASK_RESULT_STATUS_UNKNOWN",
  PENDING: "TASK_RESULT_STATUS_PENDING",
  PROCESSING: "TASK_RESULT_STATUS_PROCESSING",
  SUCCESS: "TASK_RESULT_STATUS_SUCCESS",
  FAIL: "TASK_RESULT_STATUS_FAIL",
  PARTIAL_FAIL: "TASK_RESULT_STATUS_PARTIAL_FAIL",
  SYSTEM_ERROR: "TASK_RESULT_STATUS_SYSTEM_ERROR",
  DELETED: "TASK_RESULT_STATUS_DELETED",
} as const;

export type TaskResultStatus = typeof TaskResultStatus[keyof typeof TaskResultStatus];

