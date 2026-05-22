// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_target_option.go
// Do not edit manually.

import type { ComponentDependUseType, DependItem, SupportOption } from "../v3/index";

export interface TargetOption {
  depends?: DependItem[];
  support_options?: SupportOption[];
  use?: ComponentDependUseType;
  tip?: string;
}

