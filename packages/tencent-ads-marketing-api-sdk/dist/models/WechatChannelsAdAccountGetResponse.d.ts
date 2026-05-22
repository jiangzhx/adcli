import type { ApiErrorStruct, WechatChannelsAdAccountGetResponseData } from "../models";
export interface WechatChannelsAdAccountGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountGetResponseData;
}
