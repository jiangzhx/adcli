import type { AgencyBusinessUnitListByAccountGetResponseData, ApiErrorStruct } from "../models";
export interface AgencyBusinessUnitListByAccountGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitListByAccountGetResponseData;
}
