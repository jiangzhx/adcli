import type { AdcreativeTemplatesGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativeTemplatesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplatesGetResponseData;
}
