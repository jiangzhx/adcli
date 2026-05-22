import type { ApiErrorStruct, LandingPageSellStrategyAddResponseData } from "../model/index";
export interface LandingPageSellStrategyAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LandingPageSellStrategyAddResponseData;
}
