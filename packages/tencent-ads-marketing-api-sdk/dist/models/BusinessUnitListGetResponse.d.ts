import type { ApiErrorStruct, BusinessUnitListGetResponseData } from "../models";
export interface BusinessUnitListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessUnitListGetResponseData;
}
