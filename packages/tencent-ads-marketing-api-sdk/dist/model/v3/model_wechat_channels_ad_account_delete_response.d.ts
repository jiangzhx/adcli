import type { ApiErrorStruct, WechatChannelsAdAccountDeleteResponseData } from "../v3/index";
export interface WechatChannelsAdAccountDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountDeleteResponseData;
}
