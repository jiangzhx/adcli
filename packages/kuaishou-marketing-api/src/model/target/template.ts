// Generated from github.com/bububa/kwai-marketing-api/model/target/template.go
// Do not edit manually.

import type { KuaishouId } from "../types";
import type { BehaviorInterest } from "./behavior_interest";
import type { Target } from "./target";

export interface Template {
  template_id?: KuaishouId;
  template_name?: string;
  create_time?: string;
  update_time?: string;
  auto_target?: boolean;
  target?: Target;
  unit_count?: number;
  behavior_interest?: BehaviorInterest;
}
