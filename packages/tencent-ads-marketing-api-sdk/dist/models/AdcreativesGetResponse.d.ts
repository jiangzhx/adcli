import type { AdcreativesGetResponseData, ApiErrorStruct } from "../models";
export interface AdcreativesGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativesGetResponseData;
}
