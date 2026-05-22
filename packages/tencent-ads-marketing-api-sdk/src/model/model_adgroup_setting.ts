// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adgroup_setting.go
// Do not edit manually.

import type { BillingEvent, CostType, OptimizationGoal, PromotedObjectType } from "../model/index";

export interface AdgroupSetting {
  adgroup_id?: number | string;
  adgroup_name?: string;
  automatic_site_enabled?: boolean;
  site_set?: string[];
  bid_type?: CostType;
  bid_amount?: number;
  promoted_object_type?: PromotedObjectType;
  billing_event?: BillingEvent;
  optimization_goal?: OptimizationGoal;
  promoted_object_id?: string;
  time_series?: string;
}

