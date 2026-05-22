// Generated from tencentad/marketing-api-go-sdk pkg/model/model_rule_tag.go
// Do not edit manually.

import type { RuleLabTag, RuleTagChild } from "../model/index";

export interface RuleTag {
  tag_id?: number | string;
  parent_id?: number | string;
  value?: string;
  name?: string;
  level?: number;
  type?: RuleLabTag;
  children?: RuleTagChild[];
}

