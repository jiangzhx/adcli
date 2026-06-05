// 由 oceanengine/ad_open_sdk_go models/model_campaign_get_v2_filtering_status.go 生成
// 不要手动编辑。

export const CampaignGetV2FilteringStatus = {
  CAMPAIGN_STATUS_NOT_DELETE: "CAMPAIGN_STATUS_NOT_DELETE",
  CAMPAIGN_STATUS_ENABLE: "CAMPAIGN_STATUS_ENABLE",
  CAMPAIGN_STATUS_DELETE: "CAMPAIGN_STATUS_DELETE",
  CAMPAIGN_STATUS_ALL: "CAMPAIGN_STATUS_ALL",
  CAMPAIGN_STATUS_DISABLE: "CAMPAIGN_STATUS_DISABLE",
} as const;

export type CampaignGetV2FilteringStatus = typeof CampaignGetV2FilteringStatus[keyof typeof CampaignGetV2FilteringStatus];

