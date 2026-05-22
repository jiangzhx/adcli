import type { ConversionOptimizationGoal, OptimizationGoal } from "../models";
export interface AdContextOptimizationGoalStruct {
    optimization_goal?: OptimizationGoal;
    deep_optimization_goal?: OptimizationGoal;
    deep_conversion_optimization_goal?: ConversionOptimizationGoal;
}
