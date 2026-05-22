import type { ApiErrorStruct, CampaignNegativewordsGetResponseData } from "../model/index";
export interface CampaignNegativewordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignNegativewordsGetResponseData;
}
