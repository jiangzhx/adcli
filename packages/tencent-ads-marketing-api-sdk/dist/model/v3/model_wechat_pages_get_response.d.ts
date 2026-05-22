import type { ApiErrorStruct, WechatPagesGetResponseData } from "../v3/index";
export interface WechatPagesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesGetResponseData;
}
