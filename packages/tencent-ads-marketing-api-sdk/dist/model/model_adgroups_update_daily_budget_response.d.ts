import type { AdgroupsUpdateDailyBudgetResponseData, ApiErrorStruct } from "../model/index";
export interface AdgroupsUpdateDailyBudgetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateDailyBudgetResponseData;
}
