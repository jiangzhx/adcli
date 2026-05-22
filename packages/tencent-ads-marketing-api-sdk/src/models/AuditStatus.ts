// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const AuditStatus = {
  PENDING: "PRODUCT_STATUS_PENDING",
  AUDITING: "PRODUCT_STATUS_AUDITING",
  PASS: "PRODUCT_STATUS_PASS",
  REJECTED: "PRODUCT_STATUS_REJECTED",
} as const;

export type AuditStatus = typeof AuditStatus[keyof typeof AuditStatus];

