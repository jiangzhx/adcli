import type { DeepConversionWorthGoal, OptimizationGoal } from "../v3/index";
export interface ConversionLinkOgItem {
    og?: OptimizationGoal;
    deep_og?: OptimizationGoal;
    deep_roi?: DeepConversionWorthGoal;
    advanced_roi?: DeepConversionWorthGoal;
    advanced_og?: OptimizationGoal;
    forward_link_assist?: OptimizationGoal;
}
