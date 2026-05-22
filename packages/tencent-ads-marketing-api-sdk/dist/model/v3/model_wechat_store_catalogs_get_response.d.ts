import type { ApiErrorStruct, WechatStoreCatalogsGetResponseData } from "../v3/index";
export interface WechatStoreCatalogsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatStoreCatalogsGetResponseData;
}
