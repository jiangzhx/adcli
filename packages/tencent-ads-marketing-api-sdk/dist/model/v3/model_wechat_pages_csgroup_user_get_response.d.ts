import type { ApiErrorStruct, WechatPagesCsgroupUserGetResponseData } from "../v3/index";
export interface WechatPagesCsgroupUserGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCsgroupUserGetResponseData;
}
