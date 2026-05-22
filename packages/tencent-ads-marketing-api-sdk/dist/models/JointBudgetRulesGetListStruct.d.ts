import type { JointBudgetRuleType } from "../models";
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
