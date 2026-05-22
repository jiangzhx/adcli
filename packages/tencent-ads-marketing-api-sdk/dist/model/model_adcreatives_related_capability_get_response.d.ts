import type { AdcreativesRelatedCapabilityGetResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativesRelatedCapabilityGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativesRelatedCapabilityGetResponseData;
}
