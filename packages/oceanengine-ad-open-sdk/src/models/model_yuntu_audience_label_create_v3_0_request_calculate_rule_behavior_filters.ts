// Generated from oceanengine/ad_open_sdk_go models/model_yuntu_audience_label_create_v3_0_request_calculate_rule_behavior_filters.go
// Do not edit manually.

import type { YuntuAudienceLabelCreateV30CalculateRuleBehaviorFiltersBehaviors } from "../models/index";

export interface YuntuAudienceLabelCreateV30RequestCalculateRuleBehaviorFilters {
  behaviors: YuntuAudienceLabelCreateV30CalculateRuleBehaviorFiltersBehaviors[];
  date_end: string;
  date_start: string;
  max_times?: number;
  min_times: number;
}

