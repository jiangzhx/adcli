// Generated from tencentad/marketing-api-go-sdk pkg/model/model_adgroups_update_request.go
// Do not edit manually.

import type { AdStatus, AutoDerivedCreativeStatus, BidAdjustment, BidMode, BidStrategy, DeepConversionSpec, DynamicAdSpec, EcomPkamSwitch, LiveVideoMode, LiveVideoSubMode, ModelSwitch, OptimizationGoal, SceneTargetingForWrite, SearchExpandTargetingSwitch, SmartTargeting, UserActionSetStruct, WriteTargetingSettingForAdgroup } from "../model/index";

export interface AdgroupsUpdateRequest {
  adgroup_id?: number | string;
  adgroup_name?: string;
  begin_date?: string;
  first_day_begin_time?: string;
  end_date?: string;
  bid_amount?: number;
  conversion_id?: number | string;
  optimization_goal?: OptimizationGoal;
  time_series?: string;
  daily_budget?: number;
  app_android_channel_package_id?: string;
  targeting_id?: number | string;
  targeting?: WriteTargetingSettingForAdgroup;
  scene_spec?: SceneTargetingForWrite;
  flow_optimization_enabled?: boolean;
  configured_status?: AdStatus;
  customized_category?: string;
  additional_user_action_sets?: UserActionSetStruct[];
  bid_strategy?: BidStrategy;
  cold_start_audience?: number[];
  auto_audience?: boolean;
  expand_enabled?: boolean;
  expand_targeting?: string[];
  deep_conversion_spec?: DeepConversionSpec;
  poi_list?: string[];
  deep_conversion_behavior_bid?: number;
  deep_conversion_worth_rate?: number;
  deep_conversion_worth_advanced_rate?: number;
  deep_conversion_behavior_advanced_bid?: number;
  bid_mode?: BidMode;
  bid_adjustment?: BidAdjustment;
  auto_acquisition_enabled?: boolean;
  auto_acquisition_budget?: number;
  auto_derived_creative_enabled?: boolean;
  auto_derived_creative_status?: AutoDerivedCreativeStatus;
  live_video_mode?: LiveVideoMode;
  live_video_sub_mode?: LiveVideoSubMode;
  user_action_sets?: UserActionSetStruct[];
  dynamic_ad_spec?: DynamicAdSpec;
  custom_adgroup_tag?: string[];
  smart_targeting?: SmartTargeting;
  dynamic_creative_id_set?: number[];
  auto_derived_landing_page_switch?: boolean;
  ecom_pkam_switch?: EcomPkamSwitch;
  search_intelligent_extension?: ModelSwitch;
  search_expand_targeting_switch?: SearchExpandTargetingSwitch;
  feedback_id?: number | string;
  account_id?: number | string;
}

