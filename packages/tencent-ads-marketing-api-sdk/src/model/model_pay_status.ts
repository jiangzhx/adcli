// Generated from tencentad/marketing-api-go-sdk pkg/model/model_pay_status.go
// Do not edit manually.

export const PayStatus = {
  PENDING: "PAY_PENDING",
  OK: "PAY_OK",
  REFUND: "PAY_REFUND",
  STATUS_FREE: "PAY_STATUS_FREE",
  STATUS_PAID: "PAY_STATUS_PAID",
  STATUS_MEMBER: "PAY_STATUS_MEMBER",
} as const;

export type PayStatus = typeof PayStatus[keyof typeof PayStatus];

