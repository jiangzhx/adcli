import type { ApiErrorStruct, DailyReportsGetResponseData } from "../model/index";
export interface DailyReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DailyReportsGetResponseData;
}
