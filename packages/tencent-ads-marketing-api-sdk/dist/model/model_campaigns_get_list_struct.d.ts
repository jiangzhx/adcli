import type { AdStatus, CampaignType, PromotedObjectType, SpeedMode } from "../model/index";
export interface CampaignsGetListStruct {
    campaign_id?: number | string;
    campaign_name?: string;
    configured_status?: AdStatus;
    campaign_type?: CampaignType;
    promoted_object_type?: PromotedObjectType;
    daily_budget?: number;
    total_budget?: number;
    budget_reach_date?: number;
    created_time?: number;
    last_modified_time?: number;
    speed_mode?: SpeedMode;
    is_deleted?: boolean;
    is_auto_replenish?: number;
}
