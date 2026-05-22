import type { ApiErrorStruct, MarketingTargetAssetsAddResponseData } from "../v3/index";
export interface MarketingTargetAssetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetsAddResponseData;
}
