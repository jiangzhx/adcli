import type { ApiErrorStruct, MarketingTargetAssetPropertyValuesGetResponseData } from "../v3/index";
export interface MarketingTargetAssetPropertyValuesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetPropertyValuesGetResponseData;
}
