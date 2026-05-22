import type { ApiErrorStruct, BusinessUnitAccountGetResponseData } from "../v3/index";
export interface BusinessUnitAccountGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: BusinessUnitAccountGetResponseData;
}
