// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { LocalReportAudienceGetV30FilteringCampaignType, LocalReportAudienceGetV30FilteringDeliveryScene, LocalReportAudienceGetV30FilteringRaiseGoal, LocalReportAudienceGetV30FilteringRoi2Type } from "../models";

export interface LocalReportAudienceGetV30Filtering {
  aweme_id?: string;
  campaign_type?: LocalReportAudienceGetV30FilteringCampaignType;
  delivery_scene?: LocalReportAudienceGetV30FilteringDeliveryScene[];
  poi_ids?: number[];
  project_ids?: number[];
  promotion_ids?: number[];
  raise_goal?: LocalReportAudienceGetV30FilteringRaiseGoal;
  roi2_type?: LocalReportAudienceGetV30FilteringRoi2Type;
}

