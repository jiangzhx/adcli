import type { ApiErrorStruct, JointBudgetRulesUpdateResponseData } from "../models";
export interface JointBudgetRulesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: JointBudgetRulesUpdateResponseData;
}
