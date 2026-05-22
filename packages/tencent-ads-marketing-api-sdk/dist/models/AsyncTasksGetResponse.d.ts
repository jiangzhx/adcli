import type { ApiErrorStruct, AsyncTasksGetResponseData } from "../models";
export interface AsyncTasksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncTasksGetResponseData;
}
