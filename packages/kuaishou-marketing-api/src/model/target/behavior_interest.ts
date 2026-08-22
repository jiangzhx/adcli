// Generated from github.com/bububa/kwai-marketing-api/model/target/behavior_interest.go
// Do not edit manually.

import type { Keyword } from "./keyword";

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
