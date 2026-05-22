import type { GetAsyncTaskData } from "../v3/index";
export interface GetAsyncTaskResult {
    code?: number;
    message?: string;
    data?: GetAsyncTaskData;
}
