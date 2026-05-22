import type { ApiErrorStruct, WechatChannelsAuthorizationAddResponseData } from "../v3/index";
export interface WechatChannelsAuthorizationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAuthorizationAddResponseData;
}
