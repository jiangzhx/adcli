// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const QualificationStatus = {
  NORMAL: "QUALIFICATION_STATUS_NORMAL",
  PENDING: "QUALIFICATION_STATUS_PENDING",
  DENIED: "QUALIFICATION_STATUS_DENIED",
  EXPIRED: "QUALIFICATION_STATUS_EXPIRED",
  SOON_EXPIRED: "QUALIFICATION_STATUS_SOON_EXPIRED",
} as const;

export type QualificationStatus = typeof QualificationStatus[keyof typeof QualificationStatus];

