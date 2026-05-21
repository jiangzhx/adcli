// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { QianchuanBrandReportAdGetV10FilteringCampaignScene, QianchuanBrandReportAdGetV10FilteringMarketingGoal, QianchuanBrandReportAdGetV10FilteringMarketingScene, QianchuanBrandReportAdGetV10FilteringSmartBidType, QianchuanBrandReportAdGetV10FilteringStatus } from "../models";

export interface QianchuanBrandReportAdGetV10Filtering {
  ad_ids?: number[];
  campaign_scene?: QianchuanBrandReportAdGetV10FilteringCampaignScene;
  marketing_goal: QianchuanBrandReportAdGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanBrandReportAdGetV10FilteringMarketingScene;
  smart_bid_type?: QianchuanBrandReportAdGetV10FilteringSmartBidType;
  status?: QianchuanBrandReportAdGetV10FilteringStatus;
}

