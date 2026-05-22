import type { ApiErrorStruct, WechatShopGetResponseData } from "../v3/index";
export interface WechatShopGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatShopGetResponseData;
}
