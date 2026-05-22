import type { ApiErrorStruct, CustomAudienceEstimationsGetResponseData } from "../model/index";
export interface CustomAudienceEstimationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceEstimationsGetResponseData;
}
