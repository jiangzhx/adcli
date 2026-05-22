// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_process_status.go
// Do not edit manually.

export const ProcessStatus = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  FROZEN: "FROZEN",
  THAWING: "THAWING",
  LOCKING: "LOCKING",
} as const;

export type ProcessStatus = typeof ProcessStatus[keyof typeof ProcessStatus];

