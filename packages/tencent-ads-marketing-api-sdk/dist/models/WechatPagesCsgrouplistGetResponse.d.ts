import type { ApiErrorStruct, WechatPagesCsgrouplistGetResponseData } from "../models";
export interface WechatPagesCsgrouplistGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCsgrouplistGetResponseData;
}
