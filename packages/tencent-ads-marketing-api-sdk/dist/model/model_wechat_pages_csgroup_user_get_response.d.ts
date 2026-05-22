import type { ApiErrorStruct, WechatPagesCsgroupUserGetResponseData } from "../model/index";
export interface WechatPagesCsgroupUserGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesCsgroupUserGetResponseData;
}
