import type { ApiErrorStruct, MarketingTargetAssetsGetResponseData } from "../v3/index";
export interface MarketingTargetAssetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetsGetResponseData;
}
