import type { ApiErrorStruct, WechatChannelsAuthorizationAddResponseData } from "../models";
export interface WechatChannelsAuthorizationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAuthorizationAddResponseData;
}
