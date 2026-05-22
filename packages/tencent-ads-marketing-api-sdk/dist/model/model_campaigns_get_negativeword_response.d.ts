import type { ApiErrorStruct, CampaignsGetNegativewordResponseData } from "../model/index";
export interface CampaignsGetNegativewordResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsGetNegativewordResponseData;
}
