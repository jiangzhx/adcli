import type { ApiErrorStruct, MergeFundTypeDailyBalanceReportGetResponseData } from "../models";
export interface MergeFundTypeDailyBalanceReportGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeDailyBalanceReportGetResponseData;
}
