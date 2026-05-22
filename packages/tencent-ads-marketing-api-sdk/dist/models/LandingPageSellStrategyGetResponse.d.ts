import type { ApiErrorStruct, LandingPageSellStrategyGetResponseData } from "../models";
export interface LandingPageSellStrategyGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LandingPageSellStrategyGetResponseData;
}
