import type { ApiErrorStruct, WechatAdLabelsGetResponseData } from "../model/index";
export interface WechatAdLabelsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatAdLabelsGetResponseData;
}
