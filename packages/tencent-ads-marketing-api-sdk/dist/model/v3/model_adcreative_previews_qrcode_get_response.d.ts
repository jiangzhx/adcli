import type { AdcreativePreviewsQrcodeGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdcreativePreviewsQrcodeGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativePreviewsQrcodeGetResponseData;
}
