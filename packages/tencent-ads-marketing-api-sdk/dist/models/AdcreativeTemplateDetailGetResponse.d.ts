import type { AdcreativeTemplateDetailGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativeTemplateDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplateDetailGetResponseData;
}
