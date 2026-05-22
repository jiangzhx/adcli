// Generated from tencentad/marketing-api-go-sdk pkg/model/model_ad_rule_spec.go
// Do not edit manually.

import type { AdProduct, AdRuleType } from "../model/index";

export interface AdRuleSpec {
  rule_type?: AdRuleType;
  conversion_type?: string[];
  start_date?: string;
  end_date?: string;
  campaign_id_list?: number[];
  adgroup_id_list?: number[];
  promoted_object_list?: AdProduct[];
}

