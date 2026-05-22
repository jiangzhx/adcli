import type { ApiErrorStruct, WechatChannelsAdAccountValidationGetResponseData } from "../v3/index";
export interface WechatChannelsAdAccountValidationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountValidationGetResponseData;
}
