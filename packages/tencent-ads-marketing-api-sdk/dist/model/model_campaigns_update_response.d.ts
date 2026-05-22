import type { ApiErrorStruct, CampaignsUpdateResponseData } from "../model/index";
export interface CampaignsUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsUpdateResponseData;
}
