import type { ApiErrorStruct, JointBudgetRulesAddResponseData } from "../models";
export interface JointBudgetRulesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: JointBudgetRulesAddResponseData;
}
