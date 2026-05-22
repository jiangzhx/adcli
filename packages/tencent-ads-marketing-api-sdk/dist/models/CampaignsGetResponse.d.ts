import type { ApiErrorStruct, CampaignsGetResponseData } from "../models";
export interface CampaignsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsGetResponseData;
}
