import type { ApiErrorStruct, WxGamePlayablePageGetResponseData } from "../models";
export interface WxGamePlayablePageGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WxGamePlayablePageGetResponseData;
}
