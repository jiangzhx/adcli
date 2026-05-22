import type { ApiErrorStruct, CustomAudienceReportsGetResponseData } from "../model/index";
export interface CustomAudienceReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceReportsGetResponseData;
}
