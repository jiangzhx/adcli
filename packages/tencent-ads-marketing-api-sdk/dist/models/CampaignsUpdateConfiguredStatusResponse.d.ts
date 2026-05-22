import type { ApiErrorStruct, CampaignsUpdateConfiguredStatusResponseData } from "../models";
export interface CampaignsUpdateConfiguredStatusResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsUpdateConfiguredStatusResponseData;
}
