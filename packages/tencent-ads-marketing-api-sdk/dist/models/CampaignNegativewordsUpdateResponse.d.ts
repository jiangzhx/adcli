import type { ApiErrorStruct, CampaignNegativewordsUpdateResponseData } from "../models";
export interface CampaignNegativewordsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignNegativewordsUpdateResponseData;
}
