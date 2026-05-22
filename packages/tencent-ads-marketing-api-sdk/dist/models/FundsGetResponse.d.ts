import type { ApiErrorStruct, FundsGetResponseData } from "../models";
export interface FundsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FundsGetResponseData;
}
