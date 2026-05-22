import type { ApiErrorStruct, AsyncTasksAddResponseData } from "../model/index";
export interface AsyncTasksAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AsyncTasksAddResponseData;
}
