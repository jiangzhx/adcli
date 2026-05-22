import type { CampaignType } from "../model/index";
export interface BizFilter {
    bidword_id_list?: number[];
    campaign_type?: CampaignType;
    bidword_list?: string[];
}
