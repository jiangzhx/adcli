import type { ApiErrorStruct, CampaignsDeleteResponseData } from "../model/index";
export interface CampaignsDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsDeleteResponseData;
}
