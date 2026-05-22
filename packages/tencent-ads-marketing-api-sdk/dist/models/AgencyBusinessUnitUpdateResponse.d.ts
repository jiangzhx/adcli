import type { AgencyBusinessUnitUpdateResponseData, ApiErrorStruct } from "../models";
export interface AgencyBusinessUnitUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitUpdateResponseData;
}
