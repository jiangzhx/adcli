import type { AdcreativePreviewsGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativePreviewsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativePreviewsGetResponseData;
}
