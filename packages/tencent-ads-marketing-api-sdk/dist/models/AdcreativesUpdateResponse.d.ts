import type { AdcreativesUpdateResponseData, ApiErrorStruct } from "../models";
export interface AdcreativesUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativesUpdateResponseData;
}
