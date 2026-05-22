import type { ApiErrorStruct, BusinessUnitAddResponseData } from "../v3/index";
export interface BusinessUnitAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessUnitAddResponseData;
}
