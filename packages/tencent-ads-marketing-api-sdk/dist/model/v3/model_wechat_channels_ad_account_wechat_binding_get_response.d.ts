import type { ApiErrorStruct, WechatChannelsAdAccountWechatBindingGetResponseData } from "../v3/index";
export interface WechatChannelsAdAccountWechatBindingGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountWechatBindingGetResponseData;
}
