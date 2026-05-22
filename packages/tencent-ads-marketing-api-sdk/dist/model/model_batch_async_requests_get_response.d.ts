import type { ApiErrorStruct, BatchAsyncRequestsGetResponseData } from "../model/index";
export interface BatchAsyncRequestsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestsGetResponseData;
}
