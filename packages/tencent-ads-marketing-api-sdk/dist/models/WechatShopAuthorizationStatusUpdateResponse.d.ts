import type { ApiErrorStruct, WechatShopAuthorizationStatusUpdateResponseData } from "../models";
export interface WechatShopAuthorizationStatusUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatShopAuthorizationStatusUpdateResponseData;
}
