import type { ApiErrorStruct, BusinessUnitAddResponseData } from "../models";
export interface BusinessUnitAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessUnitAddResponseData;
}
