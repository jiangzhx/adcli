// Generated from tencentad/marketing-api-go-sdk pkg/model/model_smart_targeting.go
// Do not edit manually.

import type { UnbreakableTargetingSetting } from "../model/index";

export interface SmartTargeting {
  smart_targeting_version?: number;
  smart_targeting_switch?: boolean;
  start_audience?: number[];
  unbreakable_targeting?: UnbreakableTargetingSetting;
}

