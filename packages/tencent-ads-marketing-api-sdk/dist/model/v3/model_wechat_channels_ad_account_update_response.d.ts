import type { ApiErrorStruct, WechatChannelsAdAccountUpdateResponseData } from "../v3/index";
export interface WechatChannelsAdAccountUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountUpdateResponseData;
}
