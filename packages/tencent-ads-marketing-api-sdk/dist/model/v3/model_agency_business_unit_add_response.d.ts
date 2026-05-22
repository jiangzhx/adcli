import type { AgencyBusinessUnitAddResponseData, ApiErrorStruct } from "../v3/index";
export interface AgencyBusinessUnitAddResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitAddResponseData;
}
