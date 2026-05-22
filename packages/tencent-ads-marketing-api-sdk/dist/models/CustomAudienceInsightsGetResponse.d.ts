import type { ApiErrorStruct, CustomAudienceInsightsGetResponseData } from "../models";
export interface CustomAudienceInsightsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceInsightsGetResponseData;
}
