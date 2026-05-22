import type { ApiErrorStruct, AsyncReportsAddResponseData } from "../models";
export interface AsyncReportsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncReportsAddResponseData;
}
