import type { ApiErrorStruct, CampaignsUpdateNegativewordResponseData } from "../model/index";
export interface CampaignsUpdateNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsUpdateNegativewordResponseData;
}
