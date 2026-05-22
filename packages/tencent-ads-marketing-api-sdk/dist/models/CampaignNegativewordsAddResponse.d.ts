import type { ApiErrorStruct, CampaignNegativewordsAddResponseData } from "../models";
export interface CampaignNegativewordsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignNegativewordsAddResponseData;
}
