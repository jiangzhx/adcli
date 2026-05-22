import type { ApiErrorStruct, BusinessUnitAccountGetResponseData } from "../models";
export interface BusinessUnitAccountGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessUnitAccountGetResponseData;
}
