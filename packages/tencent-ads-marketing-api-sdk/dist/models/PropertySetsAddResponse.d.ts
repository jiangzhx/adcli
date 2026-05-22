import type { ApiErrorStruct, PropertySetsAddResponseData } from "../models";
export interface PropertySetsAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertySetsAddResponseData;
}
