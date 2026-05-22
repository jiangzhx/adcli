import type { ApiErrorStruct, WechatShopAuthorizationGetResponseData } from "../v3/index";
export interface WechatShopAuthorizationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatShopAuthorizationGetResponseData;
}
