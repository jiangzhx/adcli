import type { ApiErrorStruct, WechatPagesDeleteResponseData } from "../models";
export interface WechatPagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesDeleteResponseData;
}
