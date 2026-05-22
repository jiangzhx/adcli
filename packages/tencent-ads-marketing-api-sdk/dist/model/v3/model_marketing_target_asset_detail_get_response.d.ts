import type { ApiErrorStruct, MarketingTargetAssetDetailGetResponseData } from "../v3/index";
export interface MarketingTargetAssetDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetDetailGetResponseData;
}
