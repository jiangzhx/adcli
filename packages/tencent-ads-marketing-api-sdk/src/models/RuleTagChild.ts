// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { RuleLabTag, RuleTagChildStr } from "../models";

export interface RuleTagChild {
  tag_id?: number | string;
  parent_id?: number | string;
  value?: string;
  name?: string;
  level?: number;
  type?: RuleLabTag;
  children?: RuleTagChildStr[];
}

