import type { ApiErrorStruct, DailyReportsGetResponseData } from "../v3/index";
export interface DailyReportsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DailyReportsGetResponseData;
}
