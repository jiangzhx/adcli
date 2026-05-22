import type { ApiErrorStruct, MergeFundTypeSubcustomerTransferAddResponseData } from "../model/index";
export interface MergeFundTypeSubcustomerTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeSubcustomerTransferAddResponseData;
}
