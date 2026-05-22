import type { MarketingCarrierType, MarketingGoal, MarketingSubGoal, MarketingTargetType, ProfileType } from "../v3/index";
export interface ProfilesAddRequest {
    account_id?: number | string;
    marketing_goal?: MarketingGoal;
    marketing_sub_goal?: MarketingSubGoal;
    marketing_carrier_type?: MarketingCarrierType;
    marketing_target_type?: MarketingTargetType;
    marketing_carrier_id?: string;
    profile_type?: ProfileType;
    head_image_id?: string;
    profile_name?: string;
    description?: string;
    organization_id?: number | string;
    mdm_id?: number | string;
}
