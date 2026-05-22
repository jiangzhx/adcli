import type { AdvertiserDailyBudgetUpdateResponseData, ApiErrorStruct } from "../v3/index";
export interface AdvertiserDailyBudgetUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserDailyBudgetUpdateResponseData;
}
