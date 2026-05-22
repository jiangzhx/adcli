import type { ApiErrorStruct, XijingPageByComponentsAddResponseData } from "../models";
export interface XijingPageByComponentsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageByComponentsAddResponseData;
}
