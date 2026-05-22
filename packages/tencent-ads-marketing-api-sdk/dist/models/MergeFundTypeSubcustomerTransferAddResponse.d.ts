import type { ApiErrorStruct, MergeFundTypeSubcustomerTransferAddResponseData } from "../models";
export interface MergeFundTypeSubcustomerTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeSubcustomerTransferAddResponseData;
}
