// 由 oceanengine/ad_open_sdk_go models/model_report_audience_interest_action_list_v2_filtering.go 生成
// 不要手动编辑。

import type { ReportAudienceInterestActionListV2FilteringActionDays, ReportAudienceInterestActionListV2FilteringActionScene, ReportAudienceInterestActionListV2FilteringAudienceLevel, ReportAudienceInterestActionListV2FilteringInterestActionType } from "../models/index";

export interface ReportAudienceInterestActionListV2Filtering {
  action_days?: ReportAudienceInterestActionListV2FilteringActionDays;
  action_scene?: ReportAudienceInterestActionListV2FilteringActionScene[];
  ad_ids?: (number | string)[];
  audience_level?: ReportAudienceInterestActionListV2FilteringAudienceLevel;
  campaign_ids?: (number | string)[];
  interest_action_type?: ReportAudienceInterestActionListV2FilteringInterestActionType;
}

