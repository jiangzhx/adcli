import type { AgencyRealtimeCostGetResponseData, ApiErrorStruct } from "../model/index";
export interface AgencyRealtimeCostGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyRealtimeCostGetResponseData;
}
