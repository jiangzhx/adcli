// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_ad_rule_spec.go
// Do not edit manually.

import type { AdRuleType } from "../v3/index";

export interface AdRuleSpec {
  rule_type?: AdRuleType;
  conversion_type?: string[];
  start_date?: string;
  end_date?: string;
  adgroup_id_list?: number[];
}

