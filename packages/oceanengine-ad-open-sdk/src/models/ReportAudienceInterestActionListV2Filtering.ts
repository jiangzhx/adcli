// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { ReportAudienceInterestActionListV2FilteringActionDays, ReportAudienceInterestActionListV2FilteringActionScene, ReportAudienceInterestActionListV2FilteringAudienceLevel, ReportAudienceInterestActionListV2FilteringInterestActionType } from "../models";

export interface ReportAudienceInterestActionListV2Filtering {
  action_days?: ReportAudienceInterestActionListV2FilteringActionDays;
  action_scene?: ReportAudienceInterestActionListV2FilteringActionScene[];
  ad_ids?: number | string[];
  audience_level?: ReportAudienceInterestActionListV2FilteringAudienceLevel;
  campaign_ids?: number | string[];
  interest_action_type?: ReportAudienceInterestActionListV2FilteringInterestActionType;
}

