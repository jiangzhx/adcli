import type { ApiErrorStruct, PropertySetsGetResponseData } from "../model/index";
export interface PropertySetsGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: PropertySetsGetResponseData;
}
