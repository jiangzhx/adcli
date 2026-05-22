import type { ApiErrorStruct, MarketingTargetTypesGetResponseData } from "../v3/index";
export interface MarketingTargetTypesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: MarketingTargetTypesGetResponseData;
}
