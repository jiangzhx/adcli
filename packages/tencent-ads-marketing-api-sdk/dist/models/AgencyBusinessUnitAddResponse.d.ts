import type { AgencyBusinessUnitAddResponseData, ApiErrorStruct } from "../models";
export interface AgencyBusinessUnitAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitAddResponseData;
}
