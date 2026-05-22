import type { ApiErrorStruct, WechatChannelsAuthorizationDeleteResponseData } from "../models";
export interface WechatChannelsAuthorizationDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAuthorizationDeleteResponseData;
}
