import type { ApiErrorStruct, WechatPagesCustomAddResponseData } from "../v3/index";
export interface WechatPagesCustomAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCustomAddResponseData;
}
