import type { ApiErrorStruct, BusinessUnitAccountUpdateResponseData } from "../models";
export interface BusinessUnitAccountUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessUnitAccountUpdateResponseData;
}
