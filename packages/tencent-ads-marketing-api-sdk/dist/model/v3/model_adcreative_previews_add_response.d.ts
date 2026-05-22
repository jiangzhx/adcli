import type { AdcreativePreviewsAddResponseData, ApiErrorStruct } from "../v3/index";
export interface AdcreativePreviewsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativePreviewsAddResponseData;
}
