import type { ApiErrorStruct, BatchAsyncRequestsAddResponseData } from "../model/index";
export interface BatchAsyncRequestsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestsAddResponseData;
}
