// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_status.go
// Do not edit manually.

export const AdStatus = {
  NORMAL: "AD_STATUS_NORMAL",
  PENDING: "AD_STATUS_PENDING",
  DENIED: "AD_STATUS_DENIED",
  FROZEN: "AD_STATUS_FROZEN",
  PARTIALLY_PENDING: "AD_STATUS_PARTIALLY_PENDING",
  PARTIALLY_NORMAL: "AD_STATUS_PARTIALLY_NORMAL",
  SUSPEND: "AD_STATUS_SUSPEND",
  INVALID: "AD_STATUS_INVALID",
  PREPARE: "AD_STATUS_PREPARE",
  DELETED: "AD_STATUS_DELETED",
  WITHDRAW: "AD_STATUS_WITHDRAW",
} as const;

export type AdStatus = typeof AdStatus[keyof typeof AdStatus];

