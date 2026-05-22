import type { ApiErrorStruct, CampaignsUpdateResponseData } from "../models";
export interface CampaignsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsUpdateResponseData;
}
