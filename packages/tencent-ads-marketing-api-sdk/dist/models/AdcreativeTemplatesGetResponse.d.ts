import type { AdcreativeTemplatesGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativeTemplatesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplatesGetResponseData;
}
