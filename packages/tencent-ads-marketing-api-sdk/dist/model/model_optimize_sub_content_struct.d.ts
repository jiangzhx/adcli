import type { OptBidStruct, OptBudgetStruct, OptTargetingStruct } from "../model/index";
export interface OptimizeSubContentStruct {
    targeting?: OptTargetingStruct;
    bid?: OptBidStruct;
    budget?: OptBudgetStruct;
}
