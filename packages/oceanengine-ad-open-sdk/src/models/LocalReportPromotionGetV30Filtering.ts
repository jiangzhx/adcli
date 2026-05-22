// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { LocalReportPromotionGetV30FilteringCampaignType, LocalReportPromotionGetV30FilteringDeliveryMode, LocalReportPromotionGetV30FilteringExternalAction, LocalReportPromotionGetV30FilteringLocalDeliveryScene, LocalReportPromotionGetV30FilteringMarketingGoal } from "../models";

export interface LocalReportPromotionGetV30Filtering {
  campaign_type?: LocalReportPromotionGetV30FilteringCampaignType;
  delivery_mode?: LocalReportPromotionGetV30FilteringDeliveryMode[];
  external_action?: LocalReportPromotionGetV30FilteringExternalAction[];
  local_delivery_scene?: LocalReportPromotionGetV30FilteringLocalDeliveryScene;
  marketing_goal?: LocalReportPromotionGetV30FilteringMarketingGoal;
  promotion_ids?: number[];
}

