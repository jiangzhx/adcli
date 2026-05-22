import type { ApiErrorStruct, WeixinOfficialAccountsUpgradeStatusGetResponseData } from "../models";
export interface WeixinOfficialAccountsUpgradeStatusGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WeixinOfficialAccountsUpgradeStatusGetResponseData;
}
