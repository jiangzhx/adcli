import type { ApiErrorStruct, BatchAsyncRequestSpecificationGetResponseData } from "../v3/index";
export interface BatchAsyncRequestSpecificationGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BatchAsyncRequestSpecificationGetResponseData;
}
