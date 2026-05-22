import type { ApiErrorStruct, WechatStoreProductItemsGetResponseData } from "../models";
export interface WechatStoreProductItemsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatStoreProductItemsGetResponseData;
}
