import type { ApiErrorStruct, CampaignsAddNegativewordResponseData } from "../model/index";
export interface CampaignsAddNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsAddNegativewordResponseData;
}
