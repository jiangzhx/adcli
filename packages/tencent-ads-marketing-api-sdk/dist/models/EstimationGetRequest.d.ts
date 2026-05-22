import type { BidMode, MarketingCarrierDetail, MarketingCarrierType, MarketingGoal, MarketingSubGoal, MarketingTargetDetail, MarketingTargetType, OptimizationGoal, SceneTargetingForWrite, WriteTargetingSetting } from "../models";
export interface EstimationGetRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    adgroup_name?: string;
    marketing_goal?: MarketingGoal;
    marketing_target_type?: MarketingTargetType;
    marketing_target_detail?: MarketingTargetDetail;
    marketing_sub_goal?: MarketingSubGoal;
    marketing_carrier_type?: MarketingCarrierType;
    marketing_carrier_detail?: MarketingCarrierDetail;
    automatic_site_enabled?: boolean;
    site_set?: string[];
    bid_mode?: BidMode;
    bid_amount?: number;
    optimization_goal?: OptimizationGoal;
    time_series?: string;
    targeting?: WriteTargetingSetting;
    scene_spec?: SceneTargetingForWrite;
}
