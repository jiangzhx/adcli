import type { ApiErrorStruct, WechatChannelsAccountsGetResponseData } from "../v3/index";
export interface WechatChannelsAccountsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatChannelsAccountsGetResponseData;
}
