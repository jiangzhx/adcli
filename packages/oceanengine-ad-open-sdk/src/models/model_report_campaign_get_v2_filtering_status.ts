// 由 oceanengine/ad_open_sdk_go models/model_report_campaign_get_v2_filtering_status.go 生成
// 不要手动编辑。

export const ReportCampaignGetV2FilteringStatus = {
  CAMPAIGN_STATUS_NOT_DELETE: "CAMPAIGN_STATUS_NOT_DELETE",
  CAMPAIGN_STATUS_ENABLE: "CAMPAIGN_STATUS_ENABLE",
  CAMPAIGN_STATUS_DELETE: "CAMPAIGN_STATUS_DELETE",
  CAMPAIGN_STATUS_ALL: "CAMPAIGN_STATUS_ALL",
  CAMPAIGN_STATUS_DISABLE: "CAMPAIGN_STATUS_DISABLE",
  CAMPAIGN_STATUS_ADVERTISER_BUDGET_EXCEED: "CAMPAIGN_STATUS_ADVERTISER_BUDGET_EXCEED",
} as const;

export type ReportCampaignGetV2FilteringStatus = typeof ReportCampaignGetV2FilteringStatus[keyof typeof ReportCampaignGetV2FilteringStatus];

