import type { ApiErrorStruct, MergeFundTypeSubcustomerTransferAddResponseData } from "../v3/index";
export interface MergeFundTypeSubcustomerTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeSubcustomerTransferAddResponseData;
}
