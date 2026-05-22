import type { ApiErrorStruct, MarketingRulesGetResponseData } from "../models";
export interface MarketingRulesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingRulesGetResponseData;
}
