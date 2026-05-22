import type { AdcreativeTemplateListGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativeTemplateListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplateListGetResponseData;
}
