import type { ApiErrorStruct, WechatChannelsAuthorizationDeleteResponseData } from "../v3/index";
export interface WechatChannelsAuthorizationDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAuthorizationDeleteResponseData;
}
