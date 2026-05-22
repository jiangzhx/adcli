import type { ApiErrorStruct, FundsGetResponseData } from "../v3/index";
export interface FundsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FundsGetResponseData;
}
