import type { ApiErrorStruct, FundTransferAddResponseData } from "../models";
export interface FundTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FundTransferAddResponseData;
}
