// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_illegal_complaint_status.go
// Do not edit manually.

export const IllegalComplaintStatus = {
  PENDING: "AUDIT_PENDING",
  REJECT: "AUDIT_REJECT",
  PASS: "AUDIT_PASS",
} as const;

export type IllegalComplaintStatus = typeof IllegalComplaintStatus[keyof typeof IllegalComplaintStatus];

