import type { AdcreativeTemplateGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativeTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplateGetResponseData;
}
