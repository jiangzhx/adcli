import type { ApiErrorStruct, WechatPagesAddResponseData } from "../models";
export interface WechatPagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesAddResponseData;
}
