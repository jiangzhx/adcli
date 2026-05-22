import type { ApiErrorStruct, WechatChannelsAdAccountWechatBindingAddResponseData } from "../models";
export interface WechatChannelsAdAccountWechatBindingAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountWechatBindingAddResponseData;
}
