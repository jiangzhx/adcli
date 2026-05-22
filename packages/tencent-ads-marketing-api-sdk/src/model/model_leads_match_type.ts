// Generated from tencentad/marketing-api-go-sdk pkg/model/model_leads_match_type.go
// Do not edit manually.

export const LeadsMatchType = {
  NONE: "NONE",
  LEADSID: "LEADSID",
  OUTERLEADSID: "OUTERLEADSID",
  CONTACT: "CONTACT",
  CLICKID: "CLICKID",
} as const;

export type LeadsMatchType = typeof LeadsMatchType[keyof typeof LeadsMatchType];

