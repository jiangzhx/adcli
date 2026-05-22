import type { ApiErrorStruct, WechatPagesCustomAddResponseData } from "../models";
export interface WechatPagesCustomAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCustomAddResponseData;
}
