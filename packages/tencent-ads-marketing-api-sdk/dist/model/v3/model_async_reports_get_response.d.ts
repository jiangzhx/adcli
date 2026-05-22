import type { ApiErrorStruct, AsyncReportsGetResponseData } from "../v3/index";
export interface AsyncReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncReportsGetResponseData;
}
