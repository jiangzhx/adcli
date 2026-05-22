// Generated from tencentad/marketing-api-go-sdk pkg/model/model_user_action_spec.go
// Do not edit manually.

import type { ActionAggregationRule, ActionMatchRule, ExtractRuleType, MatchRuleType, UrlMatchRule } from "../model/index";

export interface UserActionSpec {
  user_action_set_id?: number | string;
  match_rule_type?: MatchRuleType;
  extract_type?: ExtractRuleType;
  time_window?: number;
  url_match_rule?: UrlMatchRule;
  action_match_rule?: ActionMatchRule;
  action_aggregation_rule?: ActionAggregationRule;
}

