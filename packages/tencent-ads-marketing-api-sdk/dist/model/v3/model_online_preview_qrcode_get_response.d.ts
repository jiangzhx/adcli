import type { ApiErrorStruct, OnlinePreviewQrcodeGetResponseData } from "../v3/index";
export interface OnlinePreviewQrcodeGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OnlinePreviewQrcodeGetResponseData;
}
