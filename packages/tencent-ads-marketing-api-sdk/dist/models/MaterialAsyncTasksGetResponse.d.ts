import type { ApiErrorStruct, MaterialAsyncTasksGetResponseData } from "../models";
export interface MaterialAsyncTasksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAsyncTasksGetResponseData;
}
