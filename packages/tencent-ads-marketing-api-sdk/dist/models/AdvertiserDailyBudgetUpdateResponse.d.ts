import type { AdvertiserDailyBudgetUpdateResponseData, ApiErrorStruct } from "../models";
export interface AdvertiserDailyBudgetUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserDailyBudgetUpdateResponseData;
}
