import type { ApiErrorStruct, WechatStoreProductItemsGetResponseData } from "../v3/index";
export interface WechatStoreProductItemsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatStoreProductItemsGetResponseData;
}
