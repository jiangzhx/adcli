import type { NegativeWordCampaignStruct } from "../model/index";
export interface CampaignNegativewordsGetResponseData {
    campaign_error_list?: string[];
    campaign_list?: NegativeWordCampaignStruct[];
}
