import type { CampaignType } from "../models";
export interface CampaignTargeting {
    campaign_id?: number | string;
    campaign_type?: CampaignType;
    daily_budget?: number;
}
