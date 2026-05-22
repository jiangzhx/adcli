import type { AdcreativeTemplateListGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativeTemplateListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplateListGetResponseData;
}
