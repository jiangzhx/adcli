import type { ApiErrorStruct, CampaignsUpdateDailyBudgetResponseData } from "../models";
export interface CampaignsUpdateDailyBudgetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsUpdateDailyBudgetResponseData;
}
