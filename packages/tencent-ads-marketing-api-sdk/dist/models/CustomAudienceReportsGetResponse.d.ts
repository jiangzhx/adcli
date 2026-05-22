import type { ApiErrorStruct, CustomAudienceReportsGetResponseData } from "../models";
export interface CustomAudienceReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceReportsGetResponseData;
}
