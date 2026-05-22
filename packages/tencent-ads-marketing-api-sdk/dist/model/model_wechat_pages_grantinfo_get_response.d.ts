import type { ApiErrorStruct, WechatPagesGrantinfoGetResponseData } from "../model/index";
export interface WechatPagesGrantinfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesGrantinfoGetResponseData;
}
