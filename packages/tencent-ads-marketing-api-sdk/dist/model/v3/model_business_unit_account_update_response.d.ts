import type { ApiErrorStruct, BusinessUnitAccountUpdateResponseData } from "../v3/index";
export interface BusinessUnitAccountUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessUnitAccountUpdateResponseData;
}
