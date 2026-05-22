// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_group_risk_level.go
// Do not edit manually.

export const GroupRiskLevel = {
  PASS: "PASS",
  PROBABLE_PASS: "PROBABLE_PASS",
  PROBABLE_REJECT: "PROBABLE_REJECT",
  REJECT: "REJECT",
} as const;

export type GroupRiskLevel = typeof GroupRiskLevel[keyof typeof GroupRiskLevel];

