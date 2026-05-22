// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

export const OauthAccountType = {
  UNKNOWN: "ACCOUNT_TYPE_UNKNOWN",
  ADVERTISER: "ACCOUNT_TYPE_ADVERTISER",
  AGENCY: "ACCOUNT_TYPE_AGENCY",
  DSP: "ACCOUNT_TYPE_DSP",
  DEVELOPER: "ACCOUNT_TYPE_DEVELOPER",
  MEMBER: "ACCOUNT_TYPE_MEMBER",
  EXTERNAL_SUPPLIER: "ACCOUNT_TYPE_EXTERNAL_SUPPLIER",
  TDC: "ACCOUNT_TYPE_TDC",
  TONE: "ACCOUNT_TYPE_TONE",
  BM: "ACCOUNT_TYPE_BM",
  DATA_NEXUS: "ACCOUNT_TYPE_DATA_NEXUS",
} as const;

export type OauthAccountType = typeof OauthAccountType[keyof typeof OauthAccountType];

