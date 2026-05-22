import type { AdcreativeTemplatePreviewGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativeTemplatePreviewGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativeTemplatePreviewGetResponseData;
}
