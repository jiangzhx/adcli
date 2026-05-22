import type { ApiErrorStruct, AsyncTasksGetResponseData } from "../v3/index";
export interface AsyncTasksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncTasksGetResponseData;
}
