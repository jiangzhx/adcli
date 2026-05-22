import type { AdRuleType } from "../v3/index";
export interface AdRuleSpec {
    rule_type?: AdRuleType;
    conversion_type?: string[];
    start_date?: string;
    end_date?: string;
    adgroup_id_list?: number[];
}
