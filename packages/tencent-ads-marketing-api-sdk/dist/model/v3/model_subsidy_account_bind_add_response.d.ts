import type { ApiErrorStruct, SubsidyAccountBindAddResponseData } from "../v3/index";
export interface SubsidyAccountBindAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SubsidyAccountBindAddResponseData;
}
