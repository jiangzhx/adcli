import type { ApiErrorStruct, WechatChannelsAdAccountGetResponseData } from "../v3/index";
export interface WechatChannelsAdAccountGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountGetResponseData;
}
