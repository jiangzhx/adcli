import type { ApiErrorStruct, WechatChannelsAccountsGetResponseData } from "../models";
export interface WechatChannelsAccountsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAccountsGetResponseData;
}
