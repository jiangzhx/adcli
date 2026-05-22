import type { AdvertiserDailyBudgetGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AdvertiserDailyBudgetGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdvertiserDailyBudgetGetResponseData;
}
