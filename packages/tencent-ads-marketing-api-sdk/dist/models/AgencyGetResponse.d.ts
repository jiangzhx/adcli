import type { AgencyGetResponseData, ApiErrorStruct } from "../models";
export interface AgencyGetResponse {
    code?: number;
    message?: string;
    message_cn?: string;
    errors?: ApiErrorStruct[];
    data?: AgencyGetResponseData;
}
