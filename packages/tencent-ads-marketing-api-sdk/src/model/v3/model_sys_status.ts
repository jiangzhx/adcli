// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_sys_status.go
// Do not edit manually.

export const SysStatus = {
  NORMAL: "AD_STATUS_NORMAL",
  PENDING: "AD_STATUS_PENDING",
  DENIED: "AD_STATUS_DENIED",
  FROZEN: "AD_STATUS_FROZEN",
  PARTIALLY_PENDING: "AD_STATUS_PARTIALLY_PENDING",
  PARTIALLY_NORMAL: "AD_STATUS_PARTIALLY_NORMAL",
  PREPARE: "AD_STATUS_PREPARE",
  DELETED: "AD_STATUS_DELETED",
  INVALID: "AD_STATUS_INVALID",
  SUSPEND: "AD_STATUS_SUSPEND",
} as const;

export type SysStatus = typeof SysStatus[keyof typeof SysStatus];

