import type { NegativeWordCampaignStruct } from "../model/index";
export interface CampaignsGetNegativewordResponseData {
    campaign_error_list?: string[];
    campaign_list?: NegativeWordCampaignStruct[];
}
