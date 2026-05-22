// Generated from oceanengine/ad_open_sdk_go models/model_local_report_project_get_v3_0_filtering.go
// Do not edit manually.

import type { LocalReportProjectGetV30FilteringCampaignType, LocalReportProjectGetV30FilteringDeliveryMode, LocalReportProjectGetV30FilteringExternalAction, LocalReportProjectGetV30FilteringLocalDeliveryScene, LocalReportProjectGetV30FilteringMarketingGoal } from "../models/index";

export interface LocalReportProjectGetV30Filtering {
  campaign_type?: LocalReportProjectGetV30FilteringCampaignType;
  cdp_project_ids?: (number | string)[];
  delivery_mode?: LocalReportProjectGetV30FilteringDeliveryMode[];
  external_action?: LocalReportProjectGetV30FilteringExternalAction[];
  local_delivery_scene?: LocalReportProjectGetV30FilteringLocalDeliveryScene;
  marketing_goal?: LocalReportProjectGetV30FilteringMarketingGoal;
}

