import type { NegativeWordCampaignStruct } from "../models";
export interface CampaignNegativewordsGetResponseData {
    campaign_error_list?: string[];
    campaign_list?: NegativeWordCampaignStruct[];
}
