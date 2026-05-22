// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_report_hourly_level.go
// Do not edit manually.

export const ReportHourlyLevel = {
  ADVERTISER: "REPORT_LEVEL_ADVERTISER",
  ADGROUP: "REPORT_LEVEL_ADGROUP",
  DYNAMIC_CREATIVE: "REPORT_LEVEL_DYNAMIC_CREATIVE",
  CHANNEL: "REPORT_LEVEL_CHANNEL",
  BIDWORD: "REPORT_LEVEL_BIDWORD",
  ADVERTISER_TOTAL: "REPORT_LEVEL_ADVERTISER_TOTAL",
  PROJECT: "REPORT_LEVEL_PROJECT",
  PROJECT_CREATIVE: "REPORT_LEVEL_PROJECT_CREATIVE",
  VIDEO_HIGHLIGHT: "REPORT_LEVEL_VIDEO_HIGHLIGHT",
} as const;

export type ReportHourlyLevel = typeof ReportHourlyLevel[keyof typeof ReportHourlyLevel];

