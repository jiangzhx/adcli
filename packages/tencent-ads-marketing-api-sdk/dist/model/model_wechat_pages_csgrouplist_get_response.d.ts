import type { ApiErrorStruct, WechatPagesCsgrouplistGetResponseData } from "../model/index";
export interface WechatPagesCsgrouplistGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCsgrouplistGetResponseData;
}
