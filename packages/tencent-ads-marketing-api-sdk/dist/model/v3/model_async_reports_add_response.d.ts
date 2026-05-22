import type { ApiErrorStruct, AsyncReportsAddResponseData } from "../v3/index";
export interface AsyncReportsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncReportsAddResponseData;
}
