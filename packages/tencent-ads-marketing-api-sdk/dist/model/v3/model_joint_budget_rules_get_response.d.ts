import type { ApiErrorStruct, JointBudgetRulesGetResponseData } from "../v3/index";
export interface JointBudgetRulesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: JointBudgetRulesGetResponseData;
}
