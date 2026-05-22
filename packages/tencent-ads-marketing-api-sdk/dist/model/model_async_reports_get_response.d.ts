import type { ApiErrorStruct, AsyncReportsGetResponseData } from "../model/index";
export interface AsyncReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncReportsGetResponseData;
}
