import type { ApiErrorStruct, CampaignNegativewordsGetResponseData } from "../models";
export interface CampaignNegativewordsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignNegativewordsGetResponseData;
}
