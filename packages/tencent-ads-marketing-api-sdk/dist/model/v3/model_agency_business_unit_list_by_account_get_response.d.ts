import type { AgencyBusinessUnitListByAccountGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AgencyBusinessUnitListByAccountGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitListByAccountGetResponseData;
}
