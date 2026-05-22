import type { ApiErrorStruct, MarketingTargetAssetDetailGetResponseData } from "../models";
export interface MarketingTargetAssetDetailGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetDetailGetResponseData;
}
