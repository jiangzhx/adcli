import type { AdcreativeTemplatePreviewGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativeTemplatePreviewGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplatePreviewGetResponseData;
}
