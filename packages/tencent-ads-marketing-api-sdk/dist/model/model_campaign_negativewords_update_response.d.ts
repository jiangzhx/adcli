import type { ApiErrorStruct, CampaignNegativewordsUpdateResponseData } from "../model/index";
export interface CampaignNegativewordsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignNegativewordsUpdateResponseData;
}
