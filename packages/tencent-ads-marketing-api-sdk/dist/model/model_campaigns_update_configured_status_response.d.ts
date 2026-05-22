import type { ApiErrorStruct, CampaignsUpdateConfiguredStatusResponseData } from "../model/index";
export interface CampaignsUpdateConfiguredStatusResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsUpdateConfiguredStatusResponseData;
}
