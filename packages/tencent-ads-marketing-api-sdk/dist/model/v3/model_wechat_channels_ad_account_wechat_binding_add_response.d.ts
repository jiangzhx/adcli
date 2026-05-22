import type { ApiErrorStruct, WechatChannelsAdAccountWechatBindingAddResponseData } from "../v3/index";
export interface WechatChannelsAdAccountWechatBindingAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountWechatBindingAddResponseData;
}
