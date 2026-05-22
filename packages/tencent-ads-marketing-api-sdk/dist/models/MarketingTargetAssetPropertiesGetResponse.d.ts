import type { ApiErrorStruct, MarketingTargetAssetPropertiesGetResponseData } from "../models";
export interface MarketingTargetAssetPropertiesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetPropertiesGetResponseData;
}
