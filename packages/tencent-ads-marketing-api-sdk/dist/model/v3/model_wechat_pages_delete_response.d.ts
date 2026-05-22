import type { ApiErrorStruct, WechatPagesDeleteResponseData } from "../v3/index";
export interface WechatPagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesDeleteResponseData;
}
