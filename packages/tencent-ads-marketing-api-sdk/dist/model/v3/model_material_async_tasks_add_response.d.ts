import type { ApiErrorStruct, MaterialAsyncTasksAddResponseData } from "../v3/index";
export interface MaterialAsyncTasksAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAsyncTasksAddResponseData;
}
