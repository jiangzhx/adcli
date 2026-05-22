// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_joint_budget_rules_get_list_struct.go
// Do not edit manually.

import type { JointBudgetRuleType } from "../v3/index";

export interface JointBudgetRulesGetListStruct {
  joint_budget_rule_id?: number | string;
  joint_budget_rule_name?: string;
  daily_budget?: number;
  total_budget?: number;
  created_time?: number;
  last_mod_time?: number;
  completed_time?: number;
  bldate?: number;
  adgroup_id_list?: number[];
  joint_budget_rule_type?: JointBudgetRuleType;
}

