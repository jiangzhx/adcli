import type { AdvertiserUpdateDailyBudgetResponseData, ApiErrorStruct } from "../models";
export interface AdvertiserUpdateDailyBudgetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserUpdateDailyBudgetResponseData;
}
