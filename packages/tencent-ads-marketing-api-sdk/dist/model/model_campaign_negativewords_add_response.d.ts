import type { ApiErrorStruct, CampaignNegativewordsAddResponseData } from "../model/index";
export interface CampaignNegativewordsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignNegativewordsAddResponseData;
}
