// Generated from oceanengine/ad_open_sdk_go models/model_project_create_v3_0_request_delivery_setting.go
// Do not edit manually.

import type { ProjectCreateV30DeliverySettingBidType, ProjectCreateV30DeliverySettingBudgetMode, ProjectCreateV30DeliverySettingBudgetOptimizeSwitch, ProjectCreateV30DeliverySettingDeepBidType, ProjectCreateV30DeliverySettingFilterNightSwitch, ProjectCreateV30DeliverySettingLayerRoiSwitch, ProjectCreateV30DeliverySettingPricing, ProjectCreateV30DeliverySettingProjectCustom, ProjectCreateV30DeliverySettingScheduleType, ProjectCreateV30DeliverySettingSearchContinueDelivery } from "../models/index";

export interface ProjectCreateV30RequestDeliverySetting {
  bid?: number;
  bid_type: ProjectCreateV30DeliverySettingBidType;
  budget?: number;
  budget_mode: ProjectCreateV30DeliverySettingBudgetMode;
  budget_optimize_switch?: ProjectCreateV30DeliverySettingBudgetOptimizeSwitch;
  cpa_bid?: number;
  deep_bid_type?: ProjectCreateV30DeliverySettingDeepBidType;
  deep_cpabid?: number;
  end_time?: string;
  filter_night_switch?: ProjectCreateV30DeliverySettingFilterNightSwitch;
  first_roi_goal?: number;
  layer_roi_switch?: ProjectCreateV30DeliverySettingLayerRoiSwitch;
  live_duration?: number;
  pricing?: ProjectCreateV30DeliverySettingPricing;
  project_custom?: ProjectCreateV30DeliverySettingProjectCustom;
  roi_goal?: number;
  schedule_time?: string;
  schedule_type?: ProjectCreateV30DeliverySettingScheduleType;
  search_continue_delivery?: ProjectCreateV30DeliverySettingSearchContinueDelivery;
  seven_roi_goal?: number;
  start_time?: string;
}

