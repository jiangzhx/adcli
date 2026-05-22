import type { ApiErrorStruct, WechatChannelsAuthorizationUpdateResponseData } from "../v3/index";
export interface WechatChannelsAuthorizationUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAuthorizationUpdateResponseData;
}
