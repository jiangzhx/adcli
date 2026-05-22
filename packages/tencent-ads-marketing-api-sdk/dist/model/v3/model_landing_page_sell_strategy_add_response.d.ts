import type { ApiErrorStruct, LandingPageSellStrategyAddResponseData } from "../v3/index";
export interface LandingPageSellStrategyAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LandingPageSellStrategyAddResponseData;
}
