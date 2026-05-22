import type { ApiErrorStruct, BatchAsyncRequestsGetResponseData } from "../models";
export interface BatchAsyncRequestsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestsGetResponseData;
}
