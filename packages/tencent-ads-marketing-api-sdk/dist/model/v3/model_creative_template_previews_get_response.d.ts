import type { ApiErrorStruct, CreativeTemplatePreviewsGetResponseData } from "../v3/index";
export interface CreativeTemplatePreviewsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeTemplatePreviewsGetResponseData;
}
