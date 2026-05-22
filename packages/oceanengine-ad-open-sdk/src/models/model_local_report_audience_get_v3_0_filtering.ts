// Generated from oceanengine/ad_open_sdk_go models/model_local_report_audience_get_v3_0_filtering.go
// Do not edit manually.

import type { LocalReportAudienceGetV30FilteringCampaignType, LocalReportAudienceGetV30FilteringDeliveryScene, LocalReportAudienceGetV30FilteringRaiseGoal, LocalReportAudienceGetV30FilteringRoi2Type } from "../models/index";

export interface LocalReportAudienceGetV30Filtering {
  aweme_id?: string;
  campaign_type?: LocalReportAudienceGetV30FilteringCampaignType;
  delivery_scene?: LocalReportAudienceGetV30FilteringDeliveryScene[];
  poi_ids?: number | string[];
  project_ids?: number | string[];
  promotion_ids?: number | string[];
  raise_goal?: LocalReportAudienceGetV30FilteringRaiseGoal;
  roi2_type?: LocalReportAudienceGetV30FilteringRoi2Type;
}

