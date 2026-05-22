import type { ApiErrorStruct, BatchAsyncRequestSpecificationGetResponseData } from "../models";
export interface BatchAsyncRequestSpecificationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestSpecificationGetResponseData;
}
