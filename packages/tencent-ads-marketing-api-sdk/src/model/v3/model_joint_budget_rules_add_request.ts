// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_joint_budget_rules_add_request.go
// Do not edit manually.

import type { JointBudgetRuleType } from "../v3/index";

export interface JointBudgetRulesAddRequest {
  account_id?: number | string;
  joint_budget_rule_name?: string;
  daily_budget?: number;
  total_budget?: number;
  adgroup_id_list?: number[];
  joint_budget_rule_type?: JointBudgetRuleType;
}

