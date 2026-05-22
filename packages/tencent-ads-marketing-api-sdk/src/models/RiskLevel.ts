// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const RiskLevel = {
  PASS: "PASS",
  PROBABLE_PASS: "PROBABLE_PASS",
  PROBABLE_PART_REJECT: "PROBABLE_PART_REJECT",
  PROBABLE_REJECT: "PROBABLE_REJECT",
  PART_REJECT: "PART_REJECT",
  REJECT: "REJECT",
} as const;

export type RiskLevel = typeof RiskLevel[keyof typeof RiskLevel];

