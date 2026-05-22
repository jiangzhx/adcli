import type { ApiErrorStruct, WechatAdLabelsGetResponseData } from "../models";
export interface WechatAdLabelsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatAdLabelsGetResponseData;
}
