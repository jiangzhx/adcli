import type { ApiErrorStruct, CampaignsUpdateDailyBudgetResponseData } from "../model/index";
export interface CampaignsUpdateDailyBudgetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: CampaignsUpdateDailyBudgetResponseData;
}
