import type { AdcreativePreviewsGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativePreviewsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativePreviewsGetResponseData;
}
