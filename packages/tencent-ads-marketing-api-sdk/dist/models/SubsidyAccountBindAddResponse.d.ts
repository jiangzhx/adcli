import type { ApiErrorStruct, SubsidyAccountBindAddResponseData } from "../models";
export interface SubsidyAccountBindAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SubsidyAccountBindAddResponseData;
}
