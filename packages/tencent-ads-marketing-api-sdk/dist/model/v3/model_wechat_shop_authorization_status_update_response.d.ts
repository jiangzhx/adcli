import type { ApiErrorStruct, WechatShopAuthorizationStatusUpdateResponseData } from "../v3/index";
export interface WechatShopAuthorizationStatusUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatShopAuthorizationStatusUpdateResponseData;
}
