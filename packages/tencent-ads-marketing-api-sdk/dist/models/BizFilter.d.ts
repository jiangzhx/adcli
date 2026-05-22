import type { CampaignType } from "../models";
export interface BizFilter {
    bidword_id_list?: number[];
    campaign_type?: CampaignType;
    bidword_list?: string[];
}
