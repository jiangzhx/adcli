import type { ApiErrorStruct, MergeFundTypeDailyBalanceReportGetResponseData } from "../v3/index";
export interface MergeFundTypeDailyBalanceReportGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MergeFundTypeDailyBalanceReportGetResponseData;
}
