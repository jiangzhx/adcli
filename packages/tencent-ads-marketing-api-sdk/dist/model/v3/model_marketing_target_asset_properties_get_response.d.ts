import type { ApiErrorStruct, MarketingTargetAssetPropertiesGetResponseData } from "../v3/index";
export interface MarketingTargetAssetPropertiesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetPropertiesGetResponseData;
}
