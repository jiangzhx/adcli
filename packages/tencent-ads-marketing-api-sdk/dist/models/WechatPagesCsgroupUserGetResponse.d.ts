import type { ApiErrorStruct, WechatPagesCsgroupUserGetResponseData } from "../models";
export interface WechatPagesCsgroupUserGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCsgroupUserGetResponseData;
}
