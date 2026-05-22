import type { ApiErrorStruct, WechatShopAuthorizationGetResponseData } from "../models";
export interface WechatShopAuthorizationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatShopAuthorizationGetResponseData;
}
