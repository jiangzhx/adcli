import type { ApiErrorStruct, CampaignsAddResponseData } from "../model/index";
export interface CampaignsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsAddResponseData;
}
