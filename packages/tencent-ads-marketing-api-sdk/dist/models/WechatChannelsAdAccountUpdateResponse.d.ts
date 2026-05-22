import type { ApiErrorStruct, WechatChannelsAdAccountUpdateResponseData } from "../models";
export interface WechatChannelsAdAccountUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountUpdateResponseData;
}
