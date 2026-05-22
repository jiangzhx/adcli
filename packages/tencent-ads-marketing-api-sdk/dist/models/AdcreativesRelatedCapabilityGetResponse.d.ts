import type { AdcreativesRelatedCapabilityGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativesRelatedCapabilityGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativesRelatedCapabilityGetResponseData;
}
