import type { AdStatus, CampaignType, PromotedObjectType, SpeedMode } from "../model/index";
export interface CampaignsAddRequest {
    account_id?: number | string;
    campaign_name?: string;
    campaign_type?: CampaignType;
    promoted_object_type?: PromotedObjectType;
    daily_budget?: number;
    total_budget?: number;
    configured_status?: AdStatus;
    speed_mode?: SpeedMode;
}
