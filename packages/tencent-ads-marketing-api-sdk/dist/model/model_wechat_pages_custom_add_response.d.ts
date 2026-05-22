import type { ApiErrorStruct, WechatPagesCustomAddResponseData } from "../model/index";
export interface WechatPagesCustomAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCustomAddResponseData;
}
