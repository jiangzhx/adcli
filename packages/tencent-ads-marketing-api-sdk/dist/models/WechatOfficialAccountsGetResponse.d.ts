import type { ApiErrorStruct, WechatOfficialAccountsGetResponseData } from "../models";
export interface WechatOfficialAccountsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatOfficialAccountsGetResponseData;
}
