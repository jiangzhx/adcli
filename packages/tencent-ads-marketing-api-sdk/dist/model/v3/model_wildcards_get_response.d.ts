import type { ApiErrorStruct, WildcardsGetResponseData } from "../v3/index";
export interface WildcardsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: WildcardsGetResponseData;
}
