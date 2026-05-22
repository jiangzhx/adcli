import type { CampaignType } from "../model/index";
export interface CampaignTargeting {
    campaign_id?: number | string;
    campaign_type?: CampaignType;
    daily_budget?: number;
}
