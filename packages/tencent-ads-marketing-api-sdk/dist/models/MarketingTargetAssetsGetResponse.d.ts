import type { ApiErrorStruct, MarketingTargetAssetsGetResponseData } from "../models";
export interface MarketingTargetAssetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetAssetsGetResponseData;
}
