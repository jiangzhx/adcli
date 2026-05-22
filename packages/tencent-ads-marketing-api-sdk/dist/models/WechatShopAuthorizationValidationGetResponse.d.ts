import type { ApiErrorStruct } from "../models";
export interface WechatShopAuthorizationValidationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
