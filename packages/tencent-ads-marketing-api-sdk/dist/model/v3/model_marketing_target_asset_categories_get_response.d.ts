import type { ApiErrorStruct, MarketingTargetAssetCategoriesGetResponseData } from "../v3/index";
export interface MarketingTargetAssetCategoriesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetCategoriesGetResponseData;
}
