import type { ApiErrorStruct, OnlinePreviewQrcodeGetResponseData } from "../models";
export interface OnlinePreviewQrcodeGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: OnlinePreviewQrcodeGetResponseData;
}
