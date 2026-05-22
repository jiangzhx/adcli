import type { ApiErrorStruct, WechatPagesGrantinfoGetResponseData } from "../v3/index";
export interface WechatPagesGrantinfoGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WechatPagesGrantinfoGetResponseData;
}
