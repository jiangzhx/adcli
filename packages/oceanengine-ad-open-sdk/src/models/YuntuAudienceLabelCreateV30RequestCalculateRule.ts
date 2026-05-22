// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import type { YuntuAudienceLabelCreateV30CalculateRuleFieldFilters, YuntuAudienceLabelCreateV30RequestCalculateRuleBehaviorFilters, YuntuAudienceLabelCreateV30RequestCalculateRuleItemFilters, YuntuAudienceLabelCreateV30RequestCalculateRuleWordRule } from "../models";

export interface YuntuAudienceLabelCreateV30RequestCalculateRule {
  behavior_filters: YuntuAudienceLabelCreateV30RequestCalculateRuleBehaviorFilters;
  field_filters: YuntuAudienceLabelCreateV30CalculateRuleFieldFilters[];
  item_filters: YuntuAudienceLabelCreateV30RequestCalculateRuleItemFilters;
  word_rule: YuntuAudienceLabelCreateV30RequestCalculateRuleWordRule;
}

