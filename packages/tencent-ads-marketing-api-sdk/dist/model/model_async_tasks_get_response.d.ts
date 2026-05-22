import type { ApiErrorStruct, AsyncTasksGetResponseData } from "../model/index";
export interface AsyncTasksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncTasksGetResponseData;
}
