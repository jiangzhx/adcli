import type { ApiErrorStruct, DynamicCreativePreviewsAddResponseData } from "../models";
export interface DynamicCreativePreviewsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DynamicCreativePreviewsAddResponseData;
}
