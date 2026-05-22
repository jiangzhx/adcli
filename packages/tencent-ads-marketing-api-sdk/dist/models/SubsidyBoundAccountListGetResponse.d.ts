import type { ApiErrorStruct, SubsidyBoundAccountListGetResponseData } from "../models";
export interface SubsidyBoundAccountListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SubsidyBoundAccountListGetResponseData;
}
