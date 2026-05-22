import type { ApiErrorStruct, WechatChannelsAuthorizationGetResponseData } from "../models";
export interface WechatChannelsAuthorizationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAuthorizationGetResponseData;
}
