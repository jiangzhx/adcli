import type { ApiErrorStruct, WxGamePlayablePageGetResponseData } from "../v3/index";
export interface WxGamePlayablePageGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WxGamePlayablePageGetResponseData;
}
