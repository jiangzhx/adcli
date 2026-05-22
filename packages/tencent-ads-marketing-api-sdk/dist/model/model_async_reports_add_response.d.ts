import type { ApiErrorStruct, AsyncReportsAddResponseData } from "../model/index";
export interface AsyncReportsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncReportsAddResponseData;
}
