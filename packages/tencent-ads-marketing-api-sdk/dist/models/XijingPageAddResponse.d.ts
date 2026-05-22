import type { ApiErrorStruct, XijingPageAddResponseData } from "../models";
export interface XijingPageAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: XijingPageAddResponseData;
}
