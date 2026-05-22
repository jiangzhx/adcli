import type { ApiErrorStruct, WechatChannelsAdAccountValidationGetResponseData } from "../models";
export interface WechatChannelsAdAccountValidationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAdAccountValidationGetResponseData;
}
