// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import type { RuleLabTag, RuleTagChild } from "../models";

export interface RuleTag {
  tag_id?: number | string;
  parent_id?: number | string;
  value?: string;
  name?: string;
  level?: number;
  type?: RuleLabTag;
  children?: RuleTagChild[];
}

