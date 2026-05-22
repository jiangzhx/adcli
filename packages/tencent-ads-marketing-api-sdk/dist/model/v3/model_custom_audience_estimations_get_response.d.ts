import type { ApiErrorStruct, CustomAudienceEstimationsGetResponseData } from "../v3/index";
export interface CustomAudienceEstimationsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceEstimationsGetResponseData;
}
