import type { AdcreativeTemplateGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativeTemplateGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplateGetResponseData;
}
