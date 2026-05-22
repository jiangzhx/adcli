// Generated from tencentad/marketing-api-go-sdk pkg/model/model_conversions_add_request.go
// Do not edit manually.

import type { AccessType, ClaimType, ConversionOptimizationGoal, ConversionScene, DeepOptimizationGoalType, IntOptimizationGoal } from "../model/index";

export interface ConversionsAddRequest {
  account_id?: number | string;
  conversion_name?: string;
  access_type?: AccessType;
  conversion_scene?: ConversionScene;
  promoted_object_id?: string;
  app_android_channel_package_id?: string;
  claim_type?: ClaimType;
  feedback_url?: string;
  landing_page_url?: string;
  mini_program_id?: string;
  self_attributed?: boolean;
  optimization_goal?: IntOptimizationGoal;
  deep_behavior_optimization_goal?: IntOptimizationGoal;
  deep_worth_optimization_goal?: ConversionOptimizationGoal;
  deep_worth_advanced_goal?: ConversionOptimizationGoal;
  user_action_set_id?: number | string;
  conversion_link_id?: number | string;
  impression_feedback_url?: string;
  attribution_window?: number;
  deep_behavior_advanced_goal?: IntOptimizationGoal;
  deep_optimization_goal_type?: DeepOptimizationGoalType;
  forward_link_assist?: IntOptimizationGoal;
}

