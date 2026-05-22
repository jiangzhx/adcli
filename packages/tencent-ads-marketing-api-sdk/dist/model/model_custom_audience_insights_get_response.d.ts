import type { ApiErrorStruct, CustomAudienceInsightsGetResponseData } from "../model/index";
export interface CustomAudienceInsightsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CustomAudienceInsightsGetResponseData;
}
