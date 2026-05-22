import type { ApiErrorStruct, DailyBalanceReportGetResponseData } from "../models";
export interface DailyBalanceReportGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DailyBalanceReportGetResponseData;
}
