import type { AgencyBusinessUnitListGetResponseData, ApiErrorStruct } from "../models";
export interface AgencyBusinessUnitListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitListGetResponseData;
}
