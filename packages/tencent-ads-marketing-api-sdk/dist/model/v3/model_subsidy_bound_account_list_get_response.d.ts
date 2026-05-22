import type { ApiErrorStruct, SubsidyBoundAccountListGetResponseData } from "../v3/index";
export interface SubsidyBoundAccountListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: SubsidyBoundAccountListGetResponseData;
}
