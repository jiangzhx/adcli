import type { ApiErrorStruct, CreativeTemplatePreviewsGetResponseData } from "../models";
export interface CreativeTemplatePreviewsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CreativeTemplatePreviewsGetResponseData;
}
