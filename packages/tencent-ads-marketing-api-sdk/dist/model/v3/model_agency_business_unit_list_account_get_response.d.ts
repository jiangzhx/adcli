import type { AgencyBusinessUnitListAccountGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AgencyBusinessUnitListAccountGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitListAccountGetResponseData;
}
