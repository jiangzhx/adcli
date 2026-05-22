import type { JointBudgetRuleType } from "../v3/index";
export interface JointBudgetRulesAddRequest {
    account_id?: number | string;
    joint_budget_rule_name?: string;
    daily_budget?: number;
    total_budget?: number;
    adgroup_id_list?: number[];
    joint_budget_rule_type?: JointBudgetRuleType;
}
