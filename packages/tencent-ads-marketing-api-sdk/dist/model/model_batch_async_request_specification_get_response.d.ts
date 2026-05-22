import type { ApiErrorStruct, BatchAsyncRequestSpecificationGetResponseData } from "../model/index";
export interface BatchAsyncRequestSpecificationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestSpecificationGetResponseData;
}
