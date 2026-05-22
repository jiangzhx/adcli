// Generated from tencentad/marketing-api-go-sdk pkg/model/model_action_match_rule.go
// Do not edit manually.

import type { ActionType, ParamMatcherGroup } from "../model/index";

export interface ActionMatchRule {
  action_type?: ActionType;
  custom_action?: string;
  param_matcher_group?: ParamMatcherGroup[];
}

