// Generated from tencentad/marketing-api-go-sdk pkg/model/model_task_status.go
// Do not edit manually.

export const TaskStatus = {
  PENDING: "TASK_STATUS_PENDING",
  PROCESSING: "TASK_STATUS_PROCESSING",
  EXPIRED: "TASK_STATUS_EXPIRED",
  COMPLETED: "TASK_STATUS_COMPLETED",
  CANCELLED: "TASK_STATUS_CANCELLED",
  FAIL: "TASK_STATUS_FAIL",
  DELETED: "TASK_STATUS_DELETED",
  DRAFT: "TASK_STATUS_DRAFT",
} as const;

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];

