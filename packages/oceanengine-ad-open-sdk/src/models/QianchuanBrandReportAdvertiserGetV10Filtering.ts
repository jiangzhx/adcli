// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { QianchuanBrandReportAdvertiserGetV10FilteringCampaignScene, QianchuanBrandReportAdvertiserGetV10FilteringMarketingGoal, QianchuanBrandReportAdvertiserGetV10FilteringMarketingScene, QianchuanBrandReportAdvertiserGetV10FilteringSmartBidType, QianchuanBrandReportAdvertiserGetV10FilteringStatus } from "../models";

export interface QianchuanBrandReportAdvertiserGetV10Filtering {
  aweme_ids?: number[];
  campaign_scene?: QianchuanBrandReportAdvertiserGetV10FilteringCampaignScene;
  marketing_goal: QianchuanBrandReportAdvertiserGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanBrandReportAdvertiserGetV10FilteringMarketingScene;
  smart_bid_type?: QianchuanBrandReportAdvertiserGetV10FilteringSmartBidType;
  status?: QianchuanBrandReportAdvertiserGetV10FilteringStatus;
}

