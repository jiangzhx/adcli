import type { ApiErrorStruct, WechatPagesDeleteResponseData } from "../model/index";
export interface WechatPagesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesDeleteResponseData;
}
