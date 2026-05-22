import type { AdgroupsUpdateDailyBudgetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdgroupsUpdateDailyBudgetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdgroupsUpdateDailyBudgetResponseData;
}
