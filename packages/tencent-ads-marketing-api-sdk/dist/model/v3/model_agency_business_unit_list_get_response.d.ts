import type { AgencyBusinessUnitListGetResponseData, ApiErrorStruct } from "../v3/index";
export interface AgencyBusinessUnitListGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyBusinessUnitListGetResponseData;
}
