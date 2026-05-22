import type { ApiErrorStruct, MarketingTargetAssetsAddResponseData } from "../models";
export interface MarketingTargetAssetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetsAddResponseData;
}
