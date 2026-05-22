import type { ApiErrorStruct } from "../model/index";
export interface WechatPagesCsgroupStatusUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
}
