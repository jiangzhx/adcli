import type { ApiErrorStruct, WechatPagesGrantinfoGetResponseData } from "../models";
export interface WechatPagesGrantinfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesGrantinfoGetResponseData;
}
