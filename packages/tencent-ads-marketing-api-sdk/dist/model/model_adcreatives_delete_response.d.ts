import type { AdcreativesDeleteResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativesDeleteResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativesDeleteResponseData;
}
