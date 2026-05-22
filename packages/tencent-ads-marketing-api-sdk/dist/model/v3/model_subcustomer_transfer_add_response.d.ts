import type { ApiErrorStruct, SubcustomerTransferAddResponseData } from "../v3/index";
export interface SubcustomerTransferAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SubcustomerTransferAddResponseData;
}
