import type { ApiErrorStruct, AsyncReportsGetResponseData } from "../models";
export interface AsyncReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncReportsGetResponseData;
}
