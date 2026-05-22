// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_file_process_status.go
// Do not edit manually.

export const FileProcessStatus = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;

export type FileProcessStatus = typeof FileProcessStatus[keyof typeof FileProcessStatus];

