// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const DcAsyncJobStatus = {
  PENDING: "DC_ASYNC_JOB_STATUS_PENDING",
  FAIL: "DC_ASYNC_JOB_STATUS_FAIL",
  SUCCESS: "DC_ASYNC_JOB_STATUS_SUCCESS",
  SYSTEM_ERROR: "DC_ASYNC_JOB_STATUS_SYSTEM_ERROR",
  PROCESSING: "DC_ASYNC_JOB_STATUS_PROCESSING",
  RETRYING: "DC_ASYNC_JOB_STATUS_RETRYING",
  DERIVE_SUCCESS: "DC_ASYNC_JOB_STATUS_DERIVE_SUCCESS",
} as const;

export type DcAsyncJobStatus = typeof DcAsyncJobStatus[keyof typeof DcAsyncJobStatus];

