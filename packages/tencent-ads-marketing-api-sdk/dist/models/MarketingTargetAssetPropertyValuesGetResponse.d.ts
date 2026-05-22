import type { ApiErrorStruct, MarketingTargetAssetPropertyValuesGetResponseData } from "../models";
export interface MarketingTargetAssetPropertyValuesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetPropertyValuesGetResponseData;
}
