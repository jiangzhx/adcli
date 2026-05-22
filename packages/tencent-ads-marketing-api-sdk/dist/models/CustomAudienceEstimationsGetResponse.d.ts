import type { ApiErrorStruct, CustomAudienceEstimationsGetResponseData } from "../models";
export interface CustomAudienceEstimationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceEstimationsGetResponseData;
}
