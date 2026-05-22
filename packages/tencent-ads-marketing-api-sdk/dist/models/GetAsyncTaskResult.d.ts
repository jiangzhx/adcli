import type { GetAsyncTaskData } from "../models";
export interface GetAsyncTaskResult {
    code?: number;
    message?: string;
    data?: GetAsyncTaskData;
}
