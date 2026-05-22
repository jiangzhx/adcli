import type { ApiErrorStruct, WechatPagesAddResponseData } from "../v3/index";
export interface WechatPagesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesAddResponseData;
}
