import type { ApiErrorStruct, CampaignsDeleteResponseData } from "../models";
export interface CampaignsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsDeleteResponseData;
}
