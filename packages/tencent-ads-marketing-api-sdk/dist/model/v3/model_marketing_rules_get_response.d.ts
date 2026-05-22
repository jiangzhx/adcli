import type { ApiErrorStruct, MarketingRulesGetResponseData } from "../v3/index";
export interface MarketingRulesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingRulesGetResponseData;
}
