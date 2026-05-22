import type { ApiErrorStruct, WechatChannelsAdAccountAddResponseData } from "../models";
export interface WechatChannelsAdAccountAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountAddResponseData;
}
