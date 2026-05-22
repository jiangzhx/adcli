import type { ApiErrorStruct, JointBudgetRulesGetResponseData } from "../models";
export interface JointBudgetRulesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: JointBudgetRulesGetResponseData;
}
