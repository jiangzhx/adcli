import type { ConversionOptimizationGoal, OptimizationGoal } from "../v3/index";
export interface AdContextOptimizationGoalStruct {
    optimization_goal?: OptimizationGoal;
    deep_optimization_goal?: OptimizationGoal;
    deep_conversion_optimization_goal?: ConversionOptimizationGoal;
}
