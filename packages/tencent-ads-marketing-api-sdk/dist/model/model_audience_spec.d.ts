import type { AdRuleSpec, CombineSpec, KeywordSpec, LbsSpec, LookalikeSpec, UserActionSpec } from "../model/index";
export interface AudienceSpec {
    lookalike_spec?: LookalikeSpec;
    user_action_spec?: UserActionSpec;
    lbs_spec?: LbsSpec;
    keyword_spec?: KeywordSpec;
    ad_rule_spec?: AdRuleSpec;
    combine_spec?: CombineSpec;
}
