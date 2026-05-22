// Generated from oceanengine/ad_open_sdk_go models/model_project_list_v3_0_response_data_list_inner_delivery_setting.go
// Do not edit manually.

import type { ProjectListV30DataListDeliverySettingBidSpeed, ProjectListV30DataListDeliverySettingBudgetMode, ProjectListV30DataListDeliverySettingBudgetOptimizeSwitch, ProjectListV30DataListDeliverySettingDeepBidType, ProjectListV30DataListDeliverySettingLayerRoiSwitch, ProjectListV30DataListDeliverySettingProjectCustom, ProjectListV30DataListDeliverySettingScheduleType, ProjectListV30DataListDeliverySettingSearchContinueDelivery, ProjectListV30ResponseDataListInnerDeliverySettingShopMultiRoiGoalsInner } from "../models/index";

export interface ProjectListV30ResponseDataListInnerDeliverySetting {
  already_delivery_duration?: number;
  bid?: number;
  bid_speed?: ProjectListV30DataListDeliverySettingBidSpeed;
  bid_type?: string;
  budget?: number;
  budget_mode?: ProjectListV30DataListDeliverySettingBudgetMode;
  budget_optimize_switch?: ProjectListV30DataListDeliverySettingBudgetOptimizeSwitch;
  cpa_bid?: number;
  deep_bid_type?: ProjectListV30DataListDeliverySettingDeepBidType;
  deep_cpabid?: number;
  end_time?: string;
  filter_night_switch?: string;
  first_roi_goal?: number;
  layer_roi_switch?: ProjectListV30DataListDeliverySettingLayerRoiSwitch;
  live_duration?: number;
  project_custom?: ProjectListV30DataListDeliverySettingProjectCustom;
  roi_goal?: number;
  schedule_time?: string;
  schedule_type?: ProjectListV30DataListDeliverySettingScheduleType;
  search_continue_delivery?: ProjectListV30DataListDeliverySettingSearchContinueDelivery;
  seven_roi_goal?: number;
  shop_multi_roi_goals?: ProjectListV30ResponseDataListInnerDeliverySettingShopMultiRoiGoalsInner[];
  start_time?: string;
}

