// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { ActionAggregationRule, ActionMatchRule, ExtractRuleType, MatchRuleType, UrlMatchRule } from "../models";

export interface UserActionSpec {
  user_action_set_id?: number | string;
  match_rule_type?: MatchRuleType;
  extract_type?: ExtractRuleType;
  time_window?: number;
  url_match_rule?: UrlMatchRule;
  action_match_rule?: ActionMatchRule;
  action_aggregation_rule?: ActionAggregationRule;
}

