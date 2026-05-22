// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_brand_report_advertiser_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanBrandReportAdvertiserGetV10FilteringCampaignScene, QianchuanBrandReportAdvertiserGetV10FilteringMarketingGoal, QianchuanBrandReportAdvertiserGetV10FilteringMarketingScene, QianchuanBrandReportAdvertiserGetV10FilteringSmartBidType, QianchuanBrandReportAdvertiserGetV10FilteringStatus } from "../models/index";

export interface QianchuanBrandReportAdvertiserGetV10Filtering {
  aweme_ids?: number | string[];
  campaign_scene?: QianchuanBrandReportAdvertiserGetV10FilteringCampaignScene;
  marketing_goal: QianchuanBrandReportAdvertiserGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanBrandReportAdvertiserGetV10FilteringMarketingScene;
  smart_bid_type?: QianchuanBrandReportAdvertiserGetV10FilteringSmartBidType;
  status?: QianchuanBrandReportAdvertiserGetV10FilteringStatus;
}

