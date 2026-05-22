import type { ApiErrorStruct, PropertySetsGetResponseData } from "../models";
export interface PropertySetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertySetsGetResponseData;
}
