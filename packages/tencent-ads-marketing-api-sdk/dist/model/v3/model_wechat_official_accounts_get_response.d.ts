import type { ApiErrorStruct, WechatOfficialAccountsGetResponseData } from "../v3/index";
export interface WechatOfficialAccountsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatOfficialAccountsGetResponseData;
}
