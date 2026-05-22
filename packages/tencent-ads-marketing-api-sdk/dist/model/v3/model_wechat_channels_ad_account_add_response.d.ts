import type { ApiErrorStruct, WechatChannelsAdAccountAddResponseData } from "../v3/index";
export interface WechatChannelsAdAccountAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountAddResponseData;
}
