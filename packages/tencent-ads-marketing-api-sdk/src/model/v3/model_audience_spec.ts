// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_audience_spec.go
// Do not edit manually.

import type { AdRuleSpec, CombineSpec, KeywordSpec, LookalikeSpec, UserActionSpec } from "../v3/index";

export interface AudienceSpec {
  lookalike_spec?: LookalikeSpec;
  user_action_spec?: UserActionSpec;
  keyword_spec?: KeywordSpec;
  ad_rule_spec?: AdRuleSpec;
  combine_spec?: CombineSpec;
}

