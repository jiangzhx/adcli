import type { ApiErrorStruct, LandingPageSellStrategyGetResponseData } from "../model/index";
export interface LandingPageSellStrategyGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: LandingPageSellStrategyGetResponseData;
}
