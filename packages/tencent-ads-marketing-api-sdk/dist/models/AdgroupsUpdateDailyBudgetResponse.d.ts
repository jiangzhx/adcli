import type { AdgroupsUpdateDailyBudgetResponseData, ApiErrorStruct } from "../models";
export interface AdgroupsUpdateDailyBudgetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateDailyBudgetResponseData;
}
