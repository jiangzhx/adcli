import type { ApiErrorStruct, DynamicCreativePreviewsAddResponseData } from "../v3/index";
export interface DynamicCreativePreviewsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativePreviewsAddResponseData;
}
