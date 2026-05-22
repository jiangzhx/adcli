// Generated from tencentad/marketing-api-go-sdk pkg/model/v3/model_link_optimization_goal_struct.go
// Do not edit manually.

import type { ConversionOptimizationGoal, OptimizationGoal } from "../v3/index";

export interface LinkOptimizationGoalStruct {
  forward_link_assist?: OptimizationGoal;
  optimization_goal?: OptimizationGoal;
  deep_optimization_goal?: OptimizationGoal;
  deep_conversion_optimization_goal?: ConversionOptimizationGoal;
  deep_advanced_roi?: ConversionOptimizationGoal;
  deep_advanced_optimization_goal?: OptimizationGoal;
}

