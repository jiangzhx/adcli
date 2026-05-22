import type { ApiErrorStruct, MarketingTargetTypesGetResponseData } from "../models";
export interface MarketingTargetTypesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetTypesGetResponseData;
}
