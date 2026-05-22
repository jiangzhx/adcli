import type { AdcreativeTemplateDetailGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativeTemplateDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplateDetailGetResponseData;
}
