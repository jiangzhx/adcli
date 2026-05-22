// Generated from oceanengine/ad_open_sdk_go models/model_local_report_account_get_v3_0_filtering.go
// Do not edit manually.

import type { LocalReportAccountGetV30FilteringCampaignType, LocalReportAccountGetV30FilteringDeliveryMode, LocalReportAccountGetV30FilteringExternalAction, LocalReportAccountGetV30FilteringLocalDeliveryScene, LocalReportAccountGetV30FilteringMarketingGoal } from "../models/index";

export interface LocalReportAccountGetV30Filtering {
  campaign_type?: LocalReportAccountGetV30FilteringCampaignType;
  delivery_mode?: LocalReportAccountGetV30FilteringDeliveryMode[];
  external_action?: LocalReportAccountGetV30FilteringExternalAction[];
  local_delivery_scene?: LocalReportAccountGetV30FilteringLocalDeliveryScene;
  marketing_goal?: LocalReportAccountGetV30FilteringMarketingGoal;
}

