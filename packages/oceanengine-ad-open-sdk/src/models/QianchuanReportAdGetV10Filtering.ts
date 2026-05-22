// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanReportAdGetV10FilteringCampaignScene, QianchuanReportAdGetV10FilteringMarketingGoal, QianchuanReportAdGetV10FilteringMarketingScene, QianchuanReportAdGetV10FilteringOrderPlatform, QianchuanReportAdGetV10FilteringSmartBidType, QianchuanReportAdGetV10FilteringStatus } from "../models";

export interface QianchuanReportAdGetV10Filtering {
  ad_ids?: number[];
  campaign_scene?: QianchuanReportAdGetV10FilteringCampaignScene;
  marketing_goal: QianchuanReportAdGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanReportAdGetV10FilteringMarketingScene;
  order_platform?: QianchuanReportAdGetV10FilteringOrderPlatform;
  smart_bid_type?: QianchuanReportAdGetV10FilteringSmartBidType;
  status?: QianchuanReportAdGetV10FilteringStatus;
}

