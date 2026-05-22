import type { ApiErrorStruct, CampaignsAddNegativewordResponseData } from "../models";
export interface CampaignsAddNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsAddNegativewordResponseData;
}
