// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_report_ad_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanReportAdGetV10FilteringCampaignScene, QianchuanReportAdGetV10FilteringMarketingGoal, QianchuanReportAdGetV10FilteringMarketingScene, QianchuanReportAdGetV10FilteringOrderPlatform, QianchuanReportAdGetV10FilteringSmartBidType, QianchuanReportAdGetV10FilteringStatus } from "../models/index";

export interface QianchuanReportAdGetV10Filtering {
  ad_ids?: (number | string)[];
  campaign_scene?: QianchuanReportAdGetV10FilteringCampaignScene;
  marketing_goal: QianchuanReportAdGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanReportAdGetV10FilteringMarketingScene;
  order_platform?: QianchuanReportAdGetV10FilteringOrderPlatform;
  smart_bid_type?: QianchuanReportAdGetV10FilteringSmartBidType;
  status?: QianchuanReportAdGetV10FilteringStatus;
}

