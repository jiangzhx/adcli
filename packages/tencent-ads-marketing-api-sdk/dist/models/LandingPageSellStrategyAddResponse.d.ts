import type { ApiErrorStruct, LandingPageSellStrategyAddResponseData } from "../models";
export interface LandingPageSellStrategyAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LandingPageSellStrategyAddResponseData;
}
