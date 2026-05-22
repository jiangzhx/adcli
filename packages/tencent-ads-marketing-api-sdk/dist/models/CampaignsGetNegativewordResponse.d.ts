import type { ApiErrorStruct, CampaignsGetNegativewordResponseData } from "../models";
export interface CampaignsGetNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsGetNegativewordResponseData;
}
