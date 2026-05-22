// Generated from tencentad/marketing-api-go-sdk pkg/model/model_rule_tag_child.go
// Do not edit manually.

import type { RuleLabTag, RuleTagChildStr } from "../model/index";

export interface RuleTagChild {
  tag_id?: number | string;
  parent_id?: number | string;
  value?: string;
  name?: string;
  level?: number;
  type?: RuleLabTag;
  children?: RuleTagChildStr[];
}

