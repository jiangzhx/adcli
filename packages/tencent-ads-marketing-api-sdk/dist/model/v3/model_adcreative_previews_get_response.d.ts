import type { AdcreativePreviewsGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdcreativePreviewsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativePreviewsGetResponseData;
}
