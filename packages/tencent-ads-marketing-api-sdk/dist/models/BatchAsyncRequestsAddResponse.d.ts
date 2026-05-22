import type { ApiErrorStruct, BatchAsyncRequestsAddResponseData } from "../models";
export interface BatchAsyncRequestsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestsAddResponseData;
}
