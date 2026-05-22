// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_conversions_add_request.go
// Do not edit manually.

import type { AccessType, ClaimType, ConversionOptimizationGoal, ConversionScene, OptimizationGoal } from "../v3/index";

export interface ConversionsAddRequest {
  account_id?: number | string;
  conversion_name?: string;
  access_type?: AccessType;
  conversion_scene?: ConversionScene;
  marketing_carrier_id?: string;
  app_android_channel_package_id?: string;
  claim_type?: ClaimType;
  feedback_url?: string;
  landing_page_url?: string;
  mini_program_id?: string;
  self_attributed?: boolean;
  optimization_goal?: OptimizationGoal;
  deep_behavior_optimization_goal?: OptimizationGoal;
  deep_worth_optimization_goal?: ConversionOptimizationGoal;
  deep_worth_advanced_goal?: ConversionOptimizationGoal;
  user_action_set_id?: number | string;
  conversion_link_id?: number | string;
  impression_feedback_url?: string;
  attribution_window?: number;
  deep_behavior_advanced_goal?: OptimizationGoal;
  deep_optimization_goal_type?: OptimizationGoal;
  forward_link_assist?: OptimizationGoal;
  incubation_optimization_goal?: OptimizationGoal;
  conversion_template_id?: number | string;
  custom_report_index?: number[];
  created_by_action_set?: boolean;
  feedback_id?: number | string;
}

