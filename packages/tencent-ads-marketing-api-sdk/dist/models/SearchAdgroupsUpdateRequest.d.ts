import type { BidMode, ConfiguredStatus, DeepConversionSpec, OptimizationGoal, SceneTargetingForWrite, SearchExpandTargetingSwitch, UserActionSetStruct, WriteTargetingSetting } from "../models";
export interface SearchAdgroupsUpdateRequest {
    account_id?: number | string;
    adgroup_id?: number | string;
    adgroup_name?: string;
    begin_date?: string;
    end_date?: string;
    first_day_begin_time?: string;
    bid_amount?: number;
    optimization_goal?: OptimizationGoal;
    time_series?: string;
    daily_budget?: number;
    targeting?: WriteTargetingSetting;
    scene_spec?: SceneTargetingForWrite;
    user_action_sets?: UserActionSetStruct[];
    deep_conversion_spec?: DeepConversionSpec;
    conversion_id?: number | string;
    deep_conversion_behavior_bid?: number;
    deep_conversion_worth_rate?: number;
    deep_conversion_worth_advanced_rate?: number;
    deep_conversion_behavior_advanced_bid?: number;
    bid_mode?: BidMode;
    configured_status?: ConfiguredStatus;
    feedback_id?: number | string;
    search_expand_targeting_switch?: SearchExpandTargetingSwitch;
}
