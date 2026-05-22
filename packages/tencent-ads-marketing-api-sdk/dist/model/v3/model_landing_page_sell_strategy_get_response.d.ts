import type { ApiErrorStruct, LandingPageSellStrategyGetResponseData } from "../v3/index";
export interface LandingPageSellStrategyGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LandingPageSellStrategyGetResponseData;
}
