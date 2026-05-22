// Generated from oceanengine/ad_open_sdk_go models/model_qianchuan_brand_report_ad_get_v1_0_filtering.go
// Do not edit manually.

import type { QianchuanBrandReportAdGetV10FilteringCampaignScene, QianchuanBrandReportAdGetV10FilteringMarketingGoal, QianchuanBrandReportAdGetV10FilteringMarketingScene, QianchuanBrandReportAdGetV10FilteringSmartBidType, QianchuanBrandReportAdGetV10FilteringStatus } from "../models/index";

export interface QianchuanBrandReportAdGetV10Filtering {
  ad_ids?: (number | string)[];
  campaign_scene?: QianchuanBrandReportAdGetV10FilteringCampaignScene;
  marketing_goal: QianchuanBrandReportAdGetV10FilteringMarketingGoal;
  marketing_scene?: QianchuanBrandReportAdGetV10FilteringMarketingScene;
  smart_bid_type?: QianchuanBrandReportAdGetV10FilteringSmartBidType;
  status?: QianchuanBrandReportAdGetV10FilteringStatus;
}

