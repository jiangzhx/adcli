import type { AgencyBusinessUnitListAccountGetResponseData, ApiErrorStruct } from "../models";
export interface AgencyBusinessUnitListAccountGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitListAccountGetResponseData;
}
