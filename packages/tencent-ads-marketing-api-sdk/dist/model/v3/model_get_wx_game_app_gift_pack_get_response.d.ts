import type { ApiErrorStruct, GetWxGameAppGiftPackGetResponseData } from "../v3/index";
export interface GetWxGameAppGiftPackGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: GetWxGameAppGiftPackGetResponseData;
}
