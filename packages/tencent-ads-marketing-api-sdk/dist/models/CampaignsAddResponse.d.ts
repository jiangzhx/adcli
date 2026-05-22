import type { ApiErrorStruct, CampaignsAddResponseData } from "../models";
export interface CampaignsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsAddResponseData;
}
