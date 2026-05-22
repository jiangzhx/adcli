import type { ApiErrorStruct, MergeFundTypeDailyBalanceReportGetResponseData } from "../model/index";
export interface MergeFundTypeDailyBalanceReportGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeDailyBalanceReportGetResponseData;
}
