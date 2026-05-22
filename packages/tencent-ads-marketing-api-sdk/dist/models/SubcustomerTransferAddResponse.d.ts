import type { ApiErrorStruct, SubcustomerTransferAddResponseData } from "../models";
export interface SubcustomerTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SubcustomerTransferAddResponseData;
}
