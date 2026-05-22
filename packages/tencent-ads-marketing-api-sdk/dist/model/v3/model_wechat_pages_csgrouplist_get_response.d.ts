import type { ApiErrorStruct, WechatPagesCsgrouplistGetResponseData } from "../v3/index";
export interface WechatPagesCsgrouplistGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCsgrouplistGetResponseData;
}
