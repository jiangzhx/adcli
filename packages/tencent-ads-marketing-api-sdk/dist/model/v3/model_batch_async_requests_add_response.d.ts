import type { ApiErrorStruct, BatchAsyncRequestsAddResponseData } from "../v3/index";
export interface BatchAsyncRequestsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestsAddResponseData;
}
