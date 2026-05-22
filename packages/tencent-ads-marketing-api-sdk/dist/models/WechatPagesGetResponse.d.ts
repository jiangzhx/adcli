import type { ApiErrorStruct, WechatPagesGetResponseData } from "../models";
export interface WechatPagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesGetResponseData;
}
