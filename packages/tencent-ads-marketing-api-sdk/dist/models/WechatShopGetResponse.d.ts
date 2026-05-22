import type { ApiErrorStruct, WechatShopGetResponseData } from "../models";
export interface WechatShopGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatShopGetResponseData;
}
