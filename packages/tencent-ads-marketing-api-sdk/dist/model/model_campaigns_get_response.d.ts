import type { ApiErrorStruct, CampaignsGetResponseData } from "../model/index";
export interface CampaignsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsGetResponseData;
}
