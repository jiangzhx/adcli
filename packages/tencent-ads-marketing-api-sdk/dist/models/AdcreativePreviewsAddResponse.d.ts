import type { AdcreativePreviewsAddResponseData, ApiErrorStruct } from "../models";
export interface AdcreativePreviewsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativePreviewsAddResponseData;
}
