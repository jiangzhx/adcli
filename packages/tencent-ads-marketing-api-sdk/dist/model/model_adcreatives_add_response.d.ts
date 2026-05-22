import type { AdcreativesAddResponseData, ApiErrorStruct } from "../model/index";
export interface AdcreativesAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AdcreativesAddResponseData;
}
