import type { ApiErrorStruct, BusinessUnitListGetResponseData } from "../v3/index";
export interface BusinessUnitListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessUnitListGetResponseData;
}
