import type { ApiErrorStruct, WildcardsGetResponseData } from "../model/index";
export interface WildcardsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WildcardsGetResponseData;
}
