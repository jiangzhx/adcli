import type { ApiErrorStruct, FundsGetResponseData } from "../model/index";
export interface FundsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FundsGetResponseData;
}
