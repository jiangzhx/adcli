import type { ApiErrorStruct, WechatChannelsAdAccountWechatBindingGetResponseData } from "../models";
export interface WechatChannelsAdAccountWechatBindingGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountWechatBindingGetResponseData;
}
