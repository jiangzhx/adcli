import type { AdcreativesDeleteResponseData, ApiErrorStruct } from "../models";
export interface AdcreativesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativesDeleteResponseData;
}
