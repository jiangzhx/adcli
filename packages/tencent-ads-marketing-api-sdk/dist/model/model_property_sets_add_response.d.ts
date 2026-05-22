import type { ApiErrorStruct, PropertySetsAddResponseData } from "../model/index";
export interface PropertySetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertySetsAddResponseData;
}
