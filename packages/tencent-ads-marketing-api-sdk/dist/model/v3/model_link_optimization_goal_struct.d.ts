import type { ConversionOptimizationGoal, OptimizationGoal } from "../v3/index";
export interface LinkOptimizationGoalStruct {
    forward_link_assist?: OptimizationGoal;
    optimization_goal?: OptimizationGoal;
    deep_optimization_goal?: OptimizationGoal;
    deep_conversion_optimization_goal?: ConversionOptimizationGoal;
    deep_advanced_roi?: ConversionOptimizationGoal;
    deep_advanced_optimization_goal?: OptimizationGoal;
}
