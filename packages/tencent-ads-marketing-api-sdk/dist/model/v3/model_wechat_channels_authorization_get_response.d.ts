import type { ApiErrorStruct, WechatChannelsAuthorizationGetResponseData } from "../v3/index";
export interface WechatChannelsAuthorizationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAuthorizationGetResponseData;
}
