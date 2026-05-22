import type { ApiErrorStruct, WechatChannelsAdAccountDeleteResponseData } from "../models";
export interface WechatChannelsAdAccountDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountDeleteResponseData;
}
