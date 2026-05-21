// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ProjectUpdateV30DeliverySettingBudgetMode, ProjectUpdateV30DeliverySettingFilterNightSwitch, ProjectUpdateV30DeliverySettingScheduleType, ProjectUpdateV30DeliverySettingSearchContinueDelivery, ProjectUpdateV30RequestDeliverySettingShopMultiRoiGoalsInner } from "../models";

export interface ProjectUpdateV30RequestDeliverySetting {
  bid?: number;
  budget?: number;
  budget_mode?: ProjectUpdateV30DeliverySettingBudgetMode;
  cpa_bid?: number;
  deep_cpabid?: number;
  end_time?: string;
  filter_night_switch?: ProjectUpdateV30DeliverySettingFilterNightSwitch;
  first_roi_goal?: number;
  live_duration?: number;
  roi_goal?: number;
  schedule_time?: string;
  schedule_type?: ProjectUpdateV30DeliverySettingScheduleType;
  search_continue_delivery?: ProjectUpdateV30DeliverySettingSearchContinueDelivery;
  seven_roi_goal?: number;
  shop_multi_roi_goals?: ProjectUpdateV30RequestDeliverySettingShopMultiRoiGoalsInner[];
}

