import type { ApiErrorStruct, DailyReportsGetResponseData } from "../models";
export interface DailyReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DailyReportsGetResponseData;
}
