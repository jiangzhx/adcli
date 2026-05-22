// Generated from tencentad/marketing-api-go-sdk pkg/model/model_report_level_hourly.go
// Do not edit manually.

export const ReportLevelHourly = {
  ADVERTISER: "REPORT_LEVEL_ADVERTISER",
  CAMPAIGN: "REPORT_LEVEL_CAMPAIGN",
  ADGROUP: "REPORT_LEVEL_ADGROUP",
  AD: "REPORT_LEVEL_AD",
  PROMOTED_OBJECT: "REPORT_LEVEL_PROMOTED_OBJECT",
  BIDWORD: "REPORT_LEVEL_BIDWORD",
  ADVERTISER_WECHAT: "REPORT_LEVEL_ADVERTISER_WECHAT",
  CAMPAIGN_WECHAT: "REPORT_LEVEL_CAMPAIGN_WECHAT",
  ADGROUP_WECHAT: "REPORT_LEVEL_ADGROUP_WECHAT",
  AD_WECHAT: "REPORT_LEVEL_AD_WECHAT",
} as const;

export type ReportLevelHourly = typeof ReportLevelHourly[keyof typeof ReportLevelHourly];

