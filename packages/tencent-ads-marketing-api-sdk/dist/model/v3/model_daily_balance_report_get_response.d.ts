import type { ApiErrorStruct, DailyBalanceReportGetResponseData } from "../v3/index";
export interface DailyBalanceReportGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: DailyBalanceReportGetResponseData;
}
