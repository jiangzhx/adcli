import type { ApiErrorStruct, AsyncTasksAddResponseData } from "../v3/index";
export interface AsyncTasksAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncTasksAddResponseData;
}
