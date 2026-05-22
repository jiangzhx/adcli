// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_report_advertiser_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanReportAdvertiserGetV10FilteringCampaignScene, QianchuanReportAdvertiserGetV10FilteringMarketingGoal, QianchuanReportAdvertiserGetV10FilteringMarketingScene, QianchuanReportAdvertiserGetV10FilteringOrderPlatform, QianchuanReportAdvertiserGetV10FilteringSmartBidType, QianchuanReportAdvertiserGetV10FilteringStatus } from "../models/index";

export interface QianchuanReportAdvertiserGetV10Filtering {
  aweme_ids?: (number | string)[];
  campaign_scene?: QianchuanReportAdvertiserGetV10FilteringCampaignScene;
  marketing_goal: QianchuanReportAdvertiserGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanReportAdvertiserGetV10FilteringMarketingScene;
  order_platform?: QianchuanReportAdvertiserGetV10FilteringOrderPlatform;
  smart_bid_type?: QianchuanReportAdvertiserGetV10FilteringSmartBidType;
  status?: QianchuanReportAdvertiserGetV10FilteringStatus;
}

