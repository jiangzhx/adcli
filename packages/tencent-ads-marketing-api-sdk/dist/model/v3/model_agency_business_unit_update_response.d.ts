import type { AgencyBusinessUnitUpdateResponseData, ApiErrorStruct } from "../v3/index";
export interface AgencyBusinessUnitUpdateResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitUpdateResponseData;
}
