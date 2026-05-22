import type { AdvertiserUpdateDailyBudgetResponseData, ApiErrorStruct } from "../model/index";
export interface AdvertiserUpdateDailyBudgetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserUpdateDailyBudgetResponseData;
}
