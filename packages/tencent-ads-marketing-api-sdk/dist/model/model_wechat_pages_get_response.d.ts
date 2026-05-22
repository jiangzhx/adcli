import type { ApiErrorStruct, WechatPagesGetResponseData } from "../model/index";
export interface WechatPagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesGetResponseData;
}
