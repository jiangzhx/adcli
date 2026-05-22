import type { AdContextOptimizationGoalStruct, AdgroupType, ComponentType, DynamicAdType, MarketingAssetOuterSpec, MarketingCarrierDetail, MarketingCarrierType, MarketingGoal, MarketingSubGoal, MarketingTargetType, MpaSpec, PromotedAssetType } from "../models";
export interface AdContext {
    marketing_goal?: MarketingGoal;
    marketing_sub_goal?: MarketingSubGoal;
    marketing_carrier_type?: MarketingCarrierType;
    marketing_target_type?: MarketingTargetType;
    marketing_carrier_detail?: MarketingCarrierDetail;
    marketing_asset_id?: number | string;
    site_set?: string[];
    creative_template_id?: number | string;
    promoted_asset_type?: PromotedAssetType;
    component_type?: ComponentType;
    optimization_goal_struct?: AdContextOptimizationGoalStruct;
    mpa_spec?: MpaSpec;
    marketing_asset_outer_spec?: MarketingAssetOuterSpec;
    dynamic_ad_type?: DynamicAdType;
    adgroup_type?: AdgroupType;
}
