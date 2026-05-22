import type { ApiErrorStruct, CampaignsUpdateNegativewordResponseData } from "../models";
export interface CampaignsUpdateNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsUpdateNegativewordResponseData;
}
