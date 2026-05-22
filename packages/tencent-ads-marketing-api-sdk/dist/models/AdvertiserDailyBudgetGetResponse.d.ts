import type { AdvertiserDailyBudgetGetResponseData, ApiErrorStruct } from "../models";
export interface AdvertiserDailyBudgetGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserDailyBudgetGetResponseData;
}
