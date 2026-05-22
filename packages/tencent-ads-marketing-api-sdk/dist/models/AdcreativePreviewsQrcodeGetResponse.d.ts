import type { AdcreativePreviewsQrcodeGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativePreviewsQrcodeGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativePreviewsQrcodeGetResponseData;
}
