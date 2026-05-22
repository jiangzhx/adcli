import type { ApiErrorStruct, WechatShopAuthorizationAddResponseData } from "../v3/index";
export interface WechatShopAuthorizationAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatShopAuthorizationAddResponseData;
}
