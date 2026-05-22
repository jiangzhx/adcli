import type { ApiErrorStruct, FundTransferAddResponseData } from "../v3/index";
export interface FundTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: FundTransferAddResponseData;
}
