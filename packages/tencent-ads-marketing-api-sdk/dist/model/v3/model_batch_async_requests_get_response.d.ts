import type { ApiErrorStruct, BatchAsyncRequestsGetResponseData } from "../v3/index";
export interface BatchAsyncRequestsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestsGetResponseData;
}
