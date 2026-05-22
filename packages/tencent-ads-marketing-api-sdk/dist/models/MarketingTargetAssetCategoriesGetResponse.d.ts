import type { ApiErrorStruct, MarketingTargetAssetCategoriesGetResponseData } from "../models";
export interface MarketingTargetAssetCategoriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetCategoriesGetResponseData;
}
