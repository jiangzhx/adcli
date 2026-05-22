import type { ApiErrorStruct, FundTransferAddResponseData } from "../model/index";
export interface FundTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FundTransferAddResponseData;
}
