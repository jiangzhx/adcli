// Generated from tencentad/marketing-api-go-sdk pkg/model/model_risk_type_status.go
// Do not edit manually.

export const RiskTypeStatus = {
  CONSERVATIVE: "RISK_CONSERVATIVE",
  STEADY: "RISK_STEADY",
  BALANCE: "RISK_BALANCE",
  RADICAL: "RISK_RADICAL",
  OTHER: "RISK_OTHER",
} as const;

export type RiskTypeStatus = typeof RiskTypeStatus[keyof typeof RiskTypeStatus];

