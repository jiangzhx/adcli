import type { ApiErrorStruct, WeixinOfficialAccountsUpgradeStatusGetResponseData } from "../model/index";
export interface WeixinOfficialAccountsUpgradeStatusGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WeixinOfficialAccountsUpgradeStatusGetResponseData;
}
