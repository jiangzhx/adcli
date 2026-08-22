// Generated from github.com/bububa/kwai-marketing-api/model/target_v2/behavior_interest.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface BehaviorInterest {
  behavior?: Behavior;
  interest?: Interest;
}

export interface Behavior {
  keyword?: Keyword[];
  label?: string[];
  time_type?: number;
  strength_type?: number;
  scene_type?: number[];
}

export interface Interest {
  label?: string[];
  strength_type?: number;
}

export interface Keyword {
  id?: KuaishouId;
  name?: string;
}
