// Generated from tencentad/marketing-api-go-sdk pkg/model/model_conversions_get_list_struct.go
// Do not edit manually.

import type { AccessStatus, AccessType, ClaimType, ConversionOptimizationGoal, ConversionScene, CreateSourceType, DeepOptimizationGoalType, IntOptimizationGoal } from "../model/index";

export interface ConversionsGetListStruct {
  conversion_id?: number | string;
  conversion_name?: string;
  access_type?: AccessType;
  claim_type?: ClaimType;
  feedback_url?: string;
  self_attributed?: boolean;
  optimization_goal?: IntOptimizationGoal;
  deep_behavior_optimization_goal?: IntOptimizationGoal;
  deep_worth_optimization_goal?: ConversionOptimizationGoal;
  user_action_set_id?: number | string;
  user_action_set_key?: string;
  site_set_enable?: boolean;
  is_deleted?: boolean;
  access_status?: AccessStatus;
  create_source_type?: CreateSourceType;
  app_android_channel_package_id?: string;
  promoted_object_id?: string;
  conversion_scene?: ConversionScene;
  owner_id?: number | string;
  deep_worth_advanced_goal?: ConversionOptimizationGoal;
  conversion_link_id?: number | string;
  impression_feedback_url?: string;
  attribution_window?: number;
  deep_behavior_advanced_goal?: IntOptimizationGoal;
  deep_behavior_advanced_goal_min_price?: number;
  deep_behavior_advanced_goal_max_price?: number;
  deep_optimization_goal_type?: DeepOptimizationGoalType;
  forward_link_assist?: IntOptimizationGoal;
  incubation_optimization_goal?: IntOptimizationGoal;
  disable_message?: string;
  inspection_free_switch?: boolean;
}

