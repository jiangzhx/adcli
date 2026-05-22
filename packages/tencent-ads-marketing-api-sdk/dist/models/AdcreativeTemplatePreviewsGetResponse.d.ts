import type { AdcreativeTemplatePreviewsGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativeTemplatePreviewsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplatePreviewsGetResponseData;
}
