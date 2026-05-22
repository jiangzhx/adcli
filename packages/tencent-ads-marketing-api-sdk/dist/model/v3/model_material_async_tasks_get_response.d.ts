import type { ApiErrorStruct, MaterialAsyncTasksGetResponseData } from "../v3/index";
export interface MaterialAsyncTasksGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MaterialAsyncTasksGetResponseData;
}
